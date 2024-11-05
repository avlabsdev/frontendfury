// import Image from "next/image";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="font-bold text-lg">
        frontEndFury
      </Link>
      <nav className="flex gap-8 items-center">
        <Link href="/courses" className="underline hover:no-underline">
          Courses
        </Link>
        <Link href="/help" className="underline hover:no-underline">
          Help
        </Link>
      </nav>
    </header>
  );
}
