import Image from "next/image";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:gap-0 items-center justify-between w-full py-4 sm:px-8 relative z-10">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/fef-logo.webp" alt="frontEndFury" width={64} height={64} />
        <span className="bg-gradient-to-r from-yellow-200 to-orange-500 bg-clip-text text-transparent mt-1 text-3xl font-black">
          frontEndFury
        </span>
      </Link>
      <nav className="flex gap-8 items-center sm:border-none border-t-2 border-orange-900 w-full mx-auto py-4 justify-center sm:justify-end">
        <Link
          href="/courses"
          className="sm:mt-3 hover:text-orange-500 font-bold"
        >
          Courses
        </Link>
        <Link
          href="/resources"
          className="sm:mt-3 hover:text-orange-500 font-bold"
        >
          Resources
        </Link>
        <Link href="/help" className="sm:mt-3 hover:text-orange-500 font-bold">
          Help
        </Link>
      </nav>
    </header>
  );
}
