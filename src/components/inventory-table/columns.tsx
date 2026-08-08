import { createColumnHelper, tableFeatures } from "@tanstack/react-table";
import type { InventoryItem } from "#/types/item";
import ItemTitle from "./cells/item-title";

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
        cell: ({ row }) => <div>{row.original.category}</div>,
    }),
    columnHelper.accessor("rarity", {
        header: "Rarity",
        cell: ({ row }) => <div>{row.original.rarity}</div>,
    }),
    columnHelper.accessor("weight", {
        header: "Weight",
        cell: ({ row }) => <div>{row.original.weight}</div>,
    }),
    columnHelper.accessor("value", {
        header: "Value",
        cell: ({ row }) => <div>{row.original.value}</div>,
    }),
    columnHelper.accessor("durability", {
        header: "Durability",
        cell: ({ row }) => <div>{row.original.durability}</div>,
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