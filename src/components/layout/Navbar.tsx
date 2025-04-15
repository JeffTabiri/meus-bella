import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-2 bg-amber-600 p-2">
      <Link href="/">Home</Link>
      <Link href="/about  ">About</Link>
      <Link href="/home">Projects</Link>
    </nav>
  );
}
