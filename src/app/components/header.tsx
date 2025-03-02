import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-linear-to-t from-arch-red to-arch-dark-red flex flex-col justify-between items-center p-8 sm:flex-row sm:pt-14 sm:pb-10 sm:px-16">
      <div className="mb-4 text-3xl font-bold sm:mb-0">
        <Link href="/" className="no-underline">
          Archivist
        </Link>
      </div>
      <nav className="flex gap-4">
        <Link href="/faq">FAQ</Link>
        <Link href="/changelog.txt">Changelog</Link>
      </nav>
    </header>
  );
}
