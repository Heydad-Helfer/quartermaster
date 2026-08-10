export default function Weight({ weight }: { weight: number }) {
    return <div className="text-sm font-light text-muted-foreground">
        {Intl.NumberFormat("en-US", { style: "unit", unit: "kilogram" }).format(weight)}
    </div>
}