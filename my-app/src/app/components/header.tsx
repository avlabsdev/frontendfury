import Image from "next/image";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="font-bold text-lg flex items-center gap-2">
        <Image src="/fef-logo.webp" alt="frontEndFury" width={32} height={32} />
        <span className="bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent mt-1">
          frontEndFury
        </span>
      </Link>
      <nav className="flex gap-8 items-center">
        <Link href="/courses" className="underline hover:no-underline mt-1">
          Courses
        </Link>
        <Link href="/resources" className="underline hover:no-underline mt-1">
          Resources
        </Link>
        <Link href="/help" className="underline hover:no-underline mt-1">
          Help
        </Link>
      </nav>
    </header>
  );
}
