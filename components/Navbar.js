import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 shadow">
      <h1 className="text-2xl font-bold">RD Digital</h1>

      <div className="flex gap-8">
        <Link href="#">Services</Link>
        <Link href="#">Work</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </div>
    </nav>
  );
}