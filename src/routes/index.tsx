import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="mx-auto max-w-[var(--container-max-width)] px-4 py-8 md:px-8">
      <p className="text-label-md text-muted-foreground">Quartermaster</p>
      <h1 className="text-headline-xl mt-2">Midnight Forge</h1>
      <p className="text-body-lg text-muted-foreground mt-4 max-w-prose">
        Edit <code className="text-foreground">src/routes/index.tsx</code> to
        get started.
      </p>
    </div>
  )
}
