export default function Value({ value }: { value: number }) {
    return <div className="text-sm font-light text-muted-foreground flex items-center">
        <span>🪙</span>
        <span>{Intl.NumberFormat("en-US").format(value)}</span>
    </div>
}