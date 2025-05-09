import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-10 flex h-20 w-full items-center justify-between bg-black/65 px-10 font-mono text-white md:px-40">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div className="flex gap-10">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/">Contacts</Link>
      </div>
    </nav>
  );
}
