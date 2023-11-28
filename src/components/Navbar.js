"use client"

import { useRouter } from "next/navigation";
import Link from "next/link";

export function Navbar() {
  const router = useRouter();

  return (
    <header>
      <Link href="/">
        <h1>LearnDotCOde</h1>
      </Link>

      <div>
        <button onClick={() => router.push("/new")}>Añadir curso</button>
      </div>
    </header>
  );
}

export default Navbar;
