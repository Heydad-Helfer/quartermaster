import { createColumnHelper, tableFeatures } from "@tanstack/react-table";
import type { InventoryItem } from "#/types/item";
import Category from "./cells/category";
import Durability from "./cells/durability";
import ItemTitle from "./cells/item-title";
import Rarity from "./cells/rarity";
import Value from "./cells/value";
import Weight from "./cells/weight";

export const features = tableFeatures({});

export const columnHelper = createColumnHelper<typeof features, InventoryItem>();


export const columns = columnHelper.columns([
    columnHelper.display({
        id: "item-title",
        header: "Item",
        cell: ({ row }) => <ItemTitle item={row.original} />,
    }),
    columnHelper.accessor("category", {
        header: "Category",
        cell: ({ row }) => <Category category={row.original.category} />,
    }),
    columnHelper.accessor("rarity", {
        header: "Rarity",
        cell: ({ row }) => <Rarity rarity={row.original.rarity} />,
    }),
    columnHelper.accessor("weight", {
        header: "Weight",
        cell: ({ row }) => <Weight weight={row.original.weight} />,
    }),
    columnHelper.accessor("value", {
        header: "Value",
        cell: ({ row }) => <Value value={row.original.value} />,
    }),
    columnHelper.accessor((row) => row.durability, {
        id: "durability",
        header: "Durability",
        cell: ({ row }) => (
            <Durability
                category={row.original.category}
                durability={row.original.durability}
            />
        ),
    }),
    columnHelper.accessor("modifiers", {
        header: "Modifiers",
        cell: ({ row }) => (
            <div>
                {row.original.modifiers
                    .map((modifier) => `${modifier.stat} ${modifier.value}`)
                    .join(", ")}
            </div>
        ),
    }),
]);