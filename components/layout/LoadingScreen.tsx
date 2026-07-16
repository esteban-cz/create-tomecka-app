export function LoadingScreen() {
  return (
    <div
      className="flex flex-1 items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <div className="border-muted border-t-foreground size-8 animate-spin rounded-full border-4" />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
