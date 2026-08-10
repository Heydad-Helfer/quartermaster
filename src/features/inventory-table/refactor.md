# Inventory table refactor

Discussion and planning notes for splitting `InventoryTable` into focused, single-responsibility pieces.

Use this doc to work through each action item separately. Record decisions in the [decision log](#decision-log) at the bottom.

---

## Goals

The original `InventoryTable.tsx` mixed too many concerns:

- Data fetching
- TanStack Table configuration (features, columns, instance)
- Inline cell rendering
- Table chrome (filter bar, column headers, footer/pagination)
- Generic row rendering

**Target:** a thin composition shell that wires together colocated modules, each owning one concern. Rich row/cell UI should be easy to evolve toward the Forge Inventory sketch without rewriting the table shell.

---

## Design reference (sketch)

The mock shows:

**Filter bar (above the table)**

- Category dropdown ("All Categories")
- Rarity dropdown ("All Rarities")
- "More Filters" button
- "+ New Item" primary action

**Column headers**

- Item · Category · Rarity · Durability · Weight · Actions

**Rows**

- **Item:** icon, name, `ID: …` sublabel
- **Category:** label + colored status dot
- **Rarity:** pill badge (color per tier)
- **Durability:** percentage, fraction (e.g. `85/100`), progress bar; special labels ("Indestructible", "Single Use") for some items
- **Weight:** formatted value (e.g. `4.5 kg`)
- **Actions:** outlined "Edit" button

**Footer (below the table)**

- Left: `Showing 1–4 of 1,248 Items`
- Right: Previous / numbered pages / Next

Note: the sketch footer is a **bar below the table**, not a semantic `<tfoot>` — likely a sibling `div`, not shadcn `TableFooter`.

---

## Progress

| # | Action item | Status | Notes |
|---|-------------|--------|-------|
| 1 | Column definitions | **Done** | `columns.tsx` — `features`, `columnHelper`, `columns` |
| 3 | Cell components | **Partial** | `cells/` — category, durability, item-title, rarity, value, weight; modifiers still inline in `columns.tsx` |
| 2 | `useInventoryTable` hook | **Next** | Data + `useTable` + devtools still in `InventoryTable.tsx` |
| 4 | Filter bar (header chrome) | Not started | |
| 5 | Table footer + pagination | Not started | |
| 6 | Custom row component | Not started | Optional until row-level behavior is needed |
| 7 | Column alignment with sketch | Not started | Value/Modifiers vs Actions; domain gaps |
| 8 | Styling / `index.ts` exports | Not started | CSS extraction, public API |

---

## Current state

### File tree (today)

```
inventory-table/
  InventoryTable.tsx    # data + table instance + full render
  columns.tsx             # features, columnHelper, columns
  cells/
    category.tsx
    durability.tsx
    durability.css
    item-title.tsx
    rarity.tsx
    value.tsx
    weight.tsx
```

### What `InventoryTable.tsx` still owns

```tsx
const { data: items = [] } = useItems();

const table = useTable({
  key: "inventory-table",
  features,
  columns,
  data: items,
});

useTanStackTableDevtools(table);

// + TableHeader / TableBody / FlexRender loops
```

### Sketch vs code gaps

| Sketch | Current code | Gap |
|--------|--------------|-----|
| Item (icon, name, ID) | `ItemTitle` cell | Largely aligned |
| Category + dot | `Category` cell | Verify styling vs sketch |
| Rarity pill | `Rarity` cell | Verify styling vs sketch |
| Durability bar + specials | `Durability` cell | Schema is `0–100` only; "Indestructible" / "Single Use" may need model or derived rules |
| Weight | `Weight` cell | Aligned |
| Actions (Edit) | — | Not implemented |
| Value, Modifiers columns | Present | Not in sketch — product decision |
| Filter bar | — | Not implemented |
| Footer + pagination | — | Not implemented |

---

## Target folder structure

Per [component-structure rule](../../../.cursor/rules/component-structure.mdc):

```
inventory-table/
  index.ts                      # public exports only
  inventory-table.tsx             # composition shell
  use-inventory-table.ts          # data + useTable (+ future filter/pagination state)
  columns.tsx                     # column config; wires cell components
  inventory-filter-bar.tsx        # toolbar above table (filters, New Item)
  inventory-table-head.tsx        # column header row
  inventory-table-footer.tsx      # range text + pagination controls
  inventory-table-row.tsx         # optional row wrapper
  inventory-table.css             # when class lists get long (import via src/styles.css)
  cells/
    item-title.tsx
    category.tsx
    rarity.tsx
    durability.tsx
    weight.tsx
    value.tsx                     # keep or remove per product decision
    modifiers.tsx                 # extract from columns.tsx
    actions.tsx                   # Edit button, etc.
```

**Filter bar** and **column header row** are separate: filters change table state; headers label columns.

---

## Action items

### 1. Column definitions — Done

**Goal:** `InventoryTable` does not know about individual fields.

**Done:**

- `columns.tsx` exports `features`, `columnHelper`, `columns`
- Cell renderers imported from `cells/` (except modifiers)

**Follow-ups:**

- [ ] Extract `cells/modifiers.tsx` (or drop column if removed from product)
- [ ] Add `columnHelper.display({ id: 'actions', … })` when Actions column is designed
- [ ] Consider `createInventoryColumns({ onEdit })` factory if columns need runtime callbacks

**Open questions**

| Question | Options | Decision |
|----------|---------|----------|
| Static `columns` vs factory | Module constant vs `createInventoryColumns(opts)` | |
| Column `meta` for shared header styling | Yes / no | |

---

### 2. `useInventoryTable` hook — Next

**Goal:** Move data wiring and `useTable` out of the visual component.

**Minimal shape:**

```tsx
export function useInventoryTable() {
  const { data: items = [] } = useItems();

  const table = useTable({
    key: "inventory-table",
    features,
    columns,
    data: items,
  });

  useTanStackTableDevtools(table); // dev-only?

  return table;
}
```

**Checklist**

- [ ] Add `use-inventory-table.ts`
- [ ] Slim `InventoryTable.tsx` to hook + JSX
- [ ] Gate devtools / `debugTable` to dev if desired
- [ ] Export type `InventoryTableInstance` if child components take `table` as a prop

**Open questions**

| # | Question | Notes |
|---|----------|-------|
| 2.1 | **Fetch inside hook vs inject `data`?** | A: `useItems` inside (simplest). B: `useInventoryTable(data)` (testable). C: hybrid optional override. |
| 2.2 | **Return shape?** | `table` only vs `{ table, items, isLoading, … }` — depends on filter bar / footer placement |
| 2.3 | **Hook location?** | Recommend `inventory-table/use-inventory-table.ts` |
| 2.4 | **Devtools in hook or component?** | Colocate with table instance vs keep in shell |
| 2.5 | **When to add pagination/filter state?** | Suggest: minimal hook now; extend same hook when building items 4 & 5 |
| 2.6 | **Loading / empty states?** | Route `pendingComponent` vs hook exposing `isEmpty` vs table shell UI |
| 2.7 | **Export hook from `index.ts`?** | Only if page-level siblings need `table` without rendering full table |

---

### 3. Cell components — Partial

**Goal:** One presentational component per column (or logical cell); columns.tsx only wires them.

**Done:** item-title, category, rarity, weight, value, durability (+ `durability.css`)

**Remaining**

- [ ] `cells/modifiers.tsx` — move inline JSX from `columns.tsx`
- [ ] `cells/actions.tsx` — Edit button; needs callback from hook or column factory
- [ ] Shared tokens — rarity colors, category dots (e.g. `#/lib/item-meta` or `cells/shared/`)
- [ ] Align each cell with sketch styling

**Open questions**

| Question | Notes | Decision |
|----------|-------|----------|
| Cell props shape | `{ item }` vs field-specific `{ rarity }` | Prefer field-specific for reuse; `ItemTitle` uses full item |
| Durability specials | Derive from `category`? Add `durabilityMax` / `durabilityKind` to schema? | |
| Drop Value / Modifiers? | Sketch omits them | |

**Convention:** keep cells dumb — no `useTable`, no fetching. Pass plain values or `InventoryItem` slices.

---

### 4. Filter bar (header chrome)

**Goal:** Toolbar above the table that drives filter state — separate from column headers.

**Scope**

- Category select → `table.getColumn('category')?.setFilterValue()`
- Rarity select → `table.getColumn('rarity')?.setFilterValue()`
- "More Filters" — placeholder or future drawer
- "+ New Item" — may belong on **page** (`routes/inventory.tsx`) instead of inside table

**Prerequisites**

- Register `columnFilteringFeature` (and `filteredRowModel`) in `features`
- Filter state in `useInventoryTable` (or URL search params via router)

**Checklist**

- [ ] `inventory-filter-bar.tsx`
- [ ] Wire to table instance (prop: `table`)
- [ ] Decide page vs table ownership for "New Item"

**Open questions**

| Question | Options | Decision |
|----------|---------|----------|
| Filter state ownership | Hook internal state / URL search params / both | |
| Filter bar placement | Child of `InventoryTable` vs sibling on page | |
| "New Item" location | Filter bar / page header / elsewhere | |

---

### 5. Table footer + pagination

**Goal:** Match sketch — range summary + page controls.

**Implementation notes**

- Register `rowPaginationFeature` + `paginatedRowModel` in features
- Pagination state in `useInventoryTable` (start with client-side — full list from `useItems`)
- `inventory-table-footer.tsx` reads:
  - `table.getState().pagination`
  - `table.getPageCount()`
  - `table.getFilteredRowModel().rows.length` (for "of N items")
- UI: `div` below table, not `<tfoot>` (unless design changes)

**Checklist**

- [ ] Enable pagination in `features` / `useTable` options
- [ ] `inventory-table-footer.tsx`
- [ ] Compose in `inventory-table.tsx` below `<Table>`

**Open questions**

| Question | Notes | Decision |
|----------|-------|----------|
| Client vs server pagination | Full collection in memory today → client first | |
| Page size default | e.g. 25, 50 | |
| URL sync for page index | Optional later | |

---

### 6. Custom row component — Optional

**Goal:** Row-level behavior without bloating column defs.

**Extract when you need:**

- Custom hover/selected styling beyond shadcn `TableRow`
- Click-to-expand detail row
- Row actions spanning cells

**Shape:**

```tsx
// inventory-table-row.tsx
function InventoryTableRow({ row, table }: { row: Row<InventoryItem>; table: InventoryTableInstance }) {
  return (
    <TableRow>
      {row.getAllCells().map((cell) => (
        <TableCell key={cell.id}>
          <table.FlexRender cell={cell} />
        </TableCell>
      ))}
    </TableRow>
  );
}
```

**Open questions**

| Question | Decision |
|----------|----------|
| Needed for v1 of sketch? | Probably not — rich cells may suffice |
| Row selection later? | Would live here or in hook state |

---

### 7. Column alignment with sketch

**Product decisions before investing in more cells:**

| Column | Sketch | Current | Decision |
|--------|--------|---------|----------|
| Item | ✓ | ✓ | |
| Category | ✓ | ✓ | |
| Rarity | ✓ | ✓ | |
| Durability | ✓ | ✓ | |
| Weight | ✓ | ✓ | |
| Actions | ✓ | — | Add `display` column |
| Value | — | ✓ | Hide / remove / move to detail? |
| Modifiers | — | ✓ | Hide / remove / expand row? |

**Domain gaps for sketch fidelity**

- Item icons — partially via `item-meta` + `IconBox`; may need per-item art later
- Display IDs (`ITM-992`) — currently raw `item.id`
- Durability modes — schema is numeric only

---

### 8. Styling and public API

**Styling** ([component-styles rule](../../../.cursor/rules/component-styles.mdc))

- Add `inventory-table.css` when filter bar, footer, or row chrome accumulate long Tailwind lists
- Use `@layer components` + BEM-ish names (`inventory-table`, `inventory-table__footer`, …)
- Import explicitly in `src/styles.css`
- Do **not** refactor shadcn `src/components/ui/table.tsx`

**Public API**

- [ ] Add `index.ts` — export `InventoryTable` (and optionally `useInventoryTable`)
- [ ] Prefer named export over default (matches `sidebar/` pattern)
- [ ] Update `routes/inventory.tsx` import

---

## Layer boundaries

| Layer | Responsibility |
|-------|----------------|
| `routes/inventory.tsx` | Route loader, page layout, maybe "New Item" |
| `use-inventory-table.ts` | Data, table instance, pagination/filter state |
| `columns.tsx` | Column config; wires cell components |
| `cells/*` | Presentational rendering of one field |
| `inventory-filter-bar.tsx` | Toolbar + filter controls |
| `inventory-table-head.tsx` | Column header row (`FlexRender` for headers) |
| `inventory-table-footer.tsx` | Range text + pagination |
| `inventory-table-row.tsx` | Optional row wrapper |
| `inventory-table.tsx` | Compose the above; minimal logic |

---

## Recommended order

Dependencies between items:

```
1 Column definitions ✓
    ↓
3 Cell components (incremental) ←→ 7 Column alignment
    ↓
2 useInventoryTable hook
    ↓
5 Footer + pagination ──┐
4 Filter bar ───────────┼→ both need hook state + table features
    ↓
6 Row component (when needed)
    ↓
8 index.ts + CSS polish
```

**Suggested next steps**

1. Finish **2** (hook extraction) — unblocks 4 and 5
2. Continue **3** (modifiers cell, actions cell) in parallel with design
3. **5** then **4** (pagination is self-contained; filters build on same hook)
4. **7** when ready to cut Value/Modifiers and add Actions
5. **8** as chrome accumulates

---

## Small cleanups (anytime)

- Remove or dev-gate `debugTable`
- Default export → named export + `index.ts`
- Finish modifiers extraction
- Align route pending/empty states with table shell

---

## Decision log

| Topic | Decision | Date |
|-------|----------|------|
| Data: fetch inside hook vs inject | | |
| Hook return shape | | |
| Devtools placement | | |
| Export hook from `index.ts` | | |
| Filter state: hook vs URL | | |
| Filter bar vs page placement | | |
| "New Item" ownership | | |
| Pagination page size / client vs server | | |
| Keep Value & Modifiers columns? | | |
| Durability special cases (model vs derive) | | |
| Custom row component for v1? | | |
