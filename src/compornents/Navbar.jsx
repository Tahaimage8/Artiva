"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "All Photos", href: "/all-photos" },
    { name: "Pricing", href: "/pricing" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Artiva logo"
            width={34}
            height={34}
            priority
            className="h-8 w-8 object-contain"
          />
          <h3 className="text-xl font-black tracking-tight text-white">
            Artiva<span className="text-pink-500">.</span>
          </h3>
        </Link>

        <ul className="hidden items-center gap-7 text-sm font-medium text-gray-300 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition hover:text-pink-400"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>


        <div className="flex items-center gap-3">
          <Button
            as={Link}
            href="/signin"
            variant="light"
            className="text-gray-200"
          >
            Sign In
          </Button>

          <Button
            as={Link}
            href="/signup"
            className="bg-linear-to-r from-pink-500 to-violet-600 font-semibold text-white"
          >
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;