// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-8 py-4 flex flex-col gap-8 overflow-hidden">
      <div className="bg-gradient-to-b from-yellow-200 to-orange-500 w-full px-16 py-32 rounded-xl flex flex-col gap-2 relative">
        {/* <Image
          src="/curly-ribbon.png"
          alt="Curly ribbon"
          width={128 * 6}
          height={128 * 6}
          className="absolute -top-56 -right-56 z-10"
        />
        <Image
          src="/confetti.png"
          alt="Golden confetti"
          width={128 * 5}
          height={128 * 5}
          className="absolute -top-52 -right-32 z-0"
        /> */}
        <h1 className="text-4xl font-black text-gray-950 relative">
          Welcome to the fury!
        </h1>
        <p className="text-lg text-gray-950 relative">
          Front-End Education Platform
        </p>
        <div className="mt-4 flex gap-2">
          <Link
            href="#/"
            className="font-bold py-4 px-8 bg-gray-950 rounded-xl w-1/4 text-center flex items-center justify-center"
          >
            Learn more
          </Link>
          <Link
            href="#/"
            className="font-bold py-4 px-8 border-gray-950 border-2 rounded-xl w-1/4 text-center text-gray-950 flex items-center justify-center"
          >
            View Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
