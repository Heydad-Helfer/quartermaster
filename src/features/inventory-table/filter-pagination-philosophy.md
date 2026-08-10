# Filter & pagination philosophy

Decision notes for how inventory (and similar list UIs) should own filtering, sorting, and pagination when data lives in TanStack DB and is rendered with TanStack Table.

**Decision:** TanStack DB owns filter / sort / page **processing**. TanStack Table owns UI **state** and rendering.

---

## Ownership split

| Concern | Owner |
|---|---|
| Filter / page / sort *state* (what the user picked) | Table (or URL) |
| Applying those predicates to rows | **DB live query** |
| Headers, cells, selection, “Showing 1–25 of N” | Table |
| Sync / source of truth for items | Collection |

TanStack Table’s `manualFiltering` / `manualPagination` exist for this split: Table either runs the pipeline itself, or trusts that `data` is already the right page.

---

## Why not Table-owned processing?

If the full collection is passed into `useTable` with `filteredRowModel` + `paginatedRowModel`:

- Every filter/sort change walks the whole in-memory array and builds intermediate row models.
- Cost is paid for **all matching rows as Table `Row` objects**, even when only ~25 are painted.
- That duplicates work already available via TanStack DB’s SQL-like in-memory queries.

Virtualization helps **DOM** only; it does not remove row-model pipeline cost.

Table-owned processing remains fine for small lists, prototypes, or purely presentational filters — not the long-term inventory strategy as data grows.

---

## Why DB-owned processing

Today the items collection is a full sync (`queryFn: () => getItems()`). That can stay. What changes is **how we read it**:

```tsx
// Avoid: whole collection → Table does everything
useLiveQuery(collection)

// Prefer: DB returns the page Table should show
useLiveQuery(
  (q) =>
    q
      .from({ item: collection })
      .where(/* category / rarity / … */)
      .orderBy(/* … */)
      .limit(pageSize)
      .offset(pageIndex * pageSize),
  [filters, pageIndex, pageSize],
)
```

Table options:

```ts
{
  data: pageRows,
  manualFiltering: true,
  manualPagination: true,
  rowCount: totalMatching, // separate count query / meta
}
```

Benefits:

1. **Now:** still fully local — no per-request backend; filters run against the synced collection.
2. **Later:** the same live-query shape can push `where` / `orderBy` / `limit` / `offset` into `loadSubsetOptions` when the collection moves to on-demand sync. Table UI barely changes.
3. **Server-per-request** stays a last resort — only if the working set should not live in the client at all.

`useLiveInfiniteQuery` is the sibling pattern for infinite scroll instead of classic pages.

---

## What changes in the collection layer?

**The collection definition mostly stays.** `createCollection` + `queryCollectionOptions` remain “the items store.”

What changes is the **read API**:

| Piece | Full dump (today) | DB-driven table |
|---|---|---|
| `collection.ts` | Sync all items | Same for now; later maybe `syncMode: "on-demand"` + honor `loadSubsetOptions` in `queryFn` |
| `useItems()` | `useLiveQuery(collection)` | Parameterized hook (`useFilteredItems(filters, pagination)`) or query-builder wrapper |
| Count for “of N” | `data.length` | Separate live query / aggregate over the same `where` (without `limit`) |
| Table features | Client row models | `manual*` + `rowCount` |

It feels different at the hook layer because we stop treating the collection as “an array for Table” and start treating it as “a queryable store.”

---

## Practical rules

1. Keep filter / page state in the table hook (or URL) so the filter bar and footer stay Table-shaped.
2. Drive a live query from that state; pass only the current page into `data`.
3. Do **not** also enable client `filteredRowModel` / `paginatedRowModel` on that same data (double-processing).
4. Stay on full sync until memory / sync cost hurts; then evolve the collection’s `queryFn` to subset loads — same Table contract.

**Bottom line:** don’t make Table the in-memory database. Use DB for SQL-like work; use Table as the grid controller.
