import Link from 'next/link'

export function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center px-6">
        <Link href="/" className="font-semibold">
          Create Tomecka. App
        </Link>
      </nav>
    </header>
  )
}
