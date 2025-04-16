import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex fixed top-0 left-0 w-screen justify-center gap-2 my-2">
      <Link className="nav-button" href="/">Home</Link>
      <Link className="nav-button" href="/about  ">About</Link>
      <Link className="nav-button" href="/projects">Projects</Link>
      <Link className="nav-button" href="/blog">Blog</Link>
    </nav>
  );
}
