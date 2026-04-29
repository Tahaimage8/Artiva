"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "All Photos", href: "/all-photos" },
    { name: "Pricing", href: "/pricing" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Artiva logo"
            width={34}
            height={34}
            priority
            className="h-8 w-8 object-contain"
          />
          <h3 className="text-xl font-black text-white">
            Artiva<span className="text-pink-500">.</span>
          </h3>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-300">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-pink-400 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
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
            className="bg-linear-to-r from-pink-500 to-violet-600 text-white font-semibold"
          >
            Sign Up
          </Button>
        </div>

        {/* 🔥 Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/20 bg-white/10"
        >
          <span className="h-0.5 w-6 bg-white rounded-full"></span>
          <span className="h-0.5 w-6 bg-white rounded-full"></span>
          <span className="h-0.5 w-6 bg-white rounded-full"></span>
        </button>
      </nav>

      {/* 🔥 Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-5">
          
          <ul className="space-y-4 text-gray-300 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-pink-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex gap-3">
            <Button
              as={Link}
              href="/signin"
              variant="bordered"
              onClick={() => setOpen(false)}
              className="border-white/20 text-white"
            >
              Sign In
            </Button>

            <Button
              as={Link}
              href="/signup"
              onClick={() => setOpen(false)}
              className="bg-linear-to-r from-pink-500 to-violet-600 text-white"
            >
              Sign Up
            </Button>
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;