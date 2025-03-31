"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white z-50">
      <Link href="/projects" className="px-4 py-2 bg-black rounded"> Projects </Link>
    </nav>
  );
}
