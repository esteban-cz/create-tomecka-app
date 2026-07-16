import Link from 'next/link'

export function NotFoundScreen() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-muted-foreground text-sm font-medium">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-muted-foreground max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground hover:bg-primary/80 mt-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
      >
        Go back home
      </Link>
    </section>
  )
}
