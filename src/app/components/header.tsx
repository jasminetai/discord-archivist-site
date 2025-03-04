import Image from 'next/image';
import Link from 'next/link';
import { Jersey_20 } from 'next/font/google';

const jersey = Jersey_20({
  weight: ['400'],
});

export default function Header() {
  return (
    <header className="bg-linear-to-t from-arch-red to-arch-dark-red flex flex-col justify-between items-center p-8 sm:flex-row sm:py-9 sm:px-16">
      <Link
        href="/"
        className="flex flex-row items-center gap-3 hover:text-white no-underline mb-4 sm:mb-0"
      >
        <div className="rounded-full w-15 h-15 overflow-hidden">
          <Image src="/arch_icon.png" alt="Archivist icon" width={100} height={100} />
        </div>
        <div className={`flex flex-col ${jersey.className}`}>
          <span className="text-[2.45rem] leading-[0.85]">Archivist</span>
          <span className="text-xl">
            for{' '}
            <span id="bandit-rip" className="font-[keyvirtue] tracking-wide text-[0.85rem]">
              ANDIT
            </span>
          </span>
        </div>
      </Link>
      <nav className="flex gap-4">
        <Link href="/faq">FAQ</Link>
        <Link href="/changelog.txt">Changelog</Link>
      </nav>
    </header>
  );
}
