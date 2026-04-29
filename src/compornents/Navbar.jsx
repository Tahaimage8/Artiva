"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "All Photos", href: "/all-photos" },
    { name: "Pricing", href: "/pricing" },
    { name: "Profile", href: "/profile" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const userData = authClient.useSession()
const user = userData.data?.user;


//  console.log(user)

const userName = user?.name;
const userEmail = user?.email;
const userImage = user?.image;

// console.log(userName)

const handleSignOut = async() =>{
await authClient.signOut();
}




//  console.log(userData)

  return (
    <header className="relative sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-2xl shadow-lg shadow-black/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Artiva logo"
            width={34}
            height={34}
            priority
            className="h-8 w-8 object-contain transition duration-300 group-hover:scale-110"
          />

          <h3 className="text-xl font-black text-white">
            Artiva<span className="text-pink-500">.</span>
          </h3>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navItems.map((item) => (
            <li key={item.href} className="relative group">
              <Link
                href={item.href}
                className={`relative flex items-center gap-2 px-4 py-2 transition duration-300 ${
                  isActive(item.href) ? "text-white" : "hover:text-pink-400"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300 ${
                    isActive(item.href)
                      ? "bg-pink-500 opacity-100"
                      : "bg-pink-500 opacity-0 group-hover:opacity-100"
                  }`}
                ></span>

                <span className="whitespace-nowrap">{item.name}</span>
              </Link>

              <span
                className={`absolute left-4 right-4 -bottom-1 h-0.5 rounded-full bg-linear-to-r from-pink-500 to-violet-600 transition-all duration-300 ${
                  isActive(item.href)
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </li>
          ))}
        </ul>


          {/* sign */}
          {
            !user &&         <div className="hidden md:flex items-center gap-3">
          <Link href="/signin">
            <Button
              variant="light"
              className="text-gray-200 hover:text-white transition"
            >
              Sign In
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="bg-linear-to-r from-pink-500 to-violet-600 text-white font-semibold shadow-lg shadow-pink-500/25 hover:scale-105 transition">
              Sign Up
            </Button>
          </Link>
        </div>
          }
          {
            user && <div className="hidden md:flex gap-3 items-center">
                <Avatar>
        <Avatar.Image alt="John Doe" src={user?.image} 
        referrerPolicy="no-referrer"
        />
        <Avatar.Fallback>{userName[0]}</Avatar.Fallback>
      </Avatar>

          <Button onClick={handleSignOut} size="sm" variant="danger">Signout</Button>
            </div>
          }


        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl transition hover:bg-white/20"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          ></span>

          <span
            className={`h-0.5 w-6 rounded-full bg-white transition duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`h-0.5 w-6 rounded-full bg-white transition duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </button>
      </nav>

      <div
        className={`absolute left-10 right-10 top-full md:hidden overflow-hidden border border-white/10 bg-violet-600/20 backdrop-blur-2xl transition-all duration-300 ${
          open ? "max-h-90 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4">
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 transition ${
                    isActive(item.href)
                      ? "bg-white/10 text-white font-semibold"
                      : "text-gray-300 hover:bg-white/10 hover:text-pink-400"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isActive(item.href) ? "bg-pink-500" : "bg-white/20"
                      }`}
                    ></span>
                    {item.name}
                  </span>

                  {isActive(item.href) && (
                    <span className="h-0.5 w-8 rounded-full bg-linear-to-r from-pink-500 to-violet-600"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
              {/* sign */}
          {
            !user &&         <div className="flex items-center gap-3">
          <Link href="/signin">
            <Button
              variant="light"
              className="text-gray-200 hover:text-white transition"
            >
              Sign In
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="bg-linear-to-r from-pink-500 to-violet-600 text-white font-semibold shadow-lg shadow-pink-500/25 hover:scale-105 transition">
              Sign Up
            </Button>
          </Link>
        </div>
          }
          {
            user && <div className="flex gap-3 items-center">
                <Avatar>
        <Avatar.Image alt="John Doe" src={user?.image} 
        referrerPolicy="no-referrer"
        />
        <Avatar.Fallback>{userName[0]}</Avatar.Fallback>
      </Avatar>

          <Button onClick={handleSignOut} size="sm" variant="danger">Signout</Button>
            </div>
          }
        </div>
      </div>
    </header>
  );
};

export default Navbar;