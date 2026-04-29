import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/tahaimage8",
      hover: "hover:bg-black hover:text-white hover:shadow-black/30",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92v2.85c0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ibtesam-taha/",
      hover: "hover:bg-blue-600 hover:text-white hover:shadow-blue-500/30",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7.5 0h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-7.88c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V23h-4V8Z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:tahaimage8@gmail.com?subject=Contact from Artiva",
      hover: "hover:bg-pink-500 hover:text-white hover:shadow-pink-500/30",
      icon: (
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-black/10 bg-white transition-colors duration-500 dark:border-white/10 dark:bg-[#0a0a0b]">
      <div className="absolute inset-0 -z-10 bg-linear-to-tr from-purple-500/10 via-transparent to-pink-500/10 blur-3xl transition-opacity duration-500 dark:from-purple-500/15 dark:to-pink-500/15" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="logo" width={36} height={36} />
              <h2 className="text-2xl font-black text-black transition-colors duration-500 dark:text-white">
                Artiva<span className="text-pink-500">.</span>
              </h2>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-gray-600 transition-colors duration-500 dark:text-gray-400">
              Create, explore, and download stunning AI artworks.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.name === "Email" ? undefined : "_blank"}
                  rel={item.name === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={item.name}
                  className={`group relative rounded-full border border-black/10 p-2 text-gray-600 shadow-lg shadow-transparent transition-all duration-300 hover:-translate-y-1 dark:border-white/10 dark:text-gray-300 ${item.hover}`}
                >
                  {item.icon}

                  <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 scale-90 rounded-md bg-black px-2.5 py-1 text-xs text-white opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 dark:bg-white dark:text-black">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-black dark:text-white">
              Product
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/generate" className="transition hover:text-pink-500">Generate</Link></li>
              <li><Link href="/all-photos" className="transition hover:text-pink-500">Gallery</Link></li>
              <li><Link href="/pricing" className="transition hover:text-pink-500">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-black dark:text-white">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/about" className="transition hover:text-pink-500">About</Link></li>
              <li><Link href="/contact" className="transition hover:text-pink-500">Contact</Link></li>
              <li><Link href="/terms" className="transition hover:text-pink-500">Terms</Link></li>
            </ul>
          </div>

          <div className="rounded-2xl border border-black/10 bg-black/5 p-5 transition-colors duration-500 dark:border-white/10 dark:bg-white/5">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Start creating today
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Generate your first AI image now.
            </p>

            <Link
              href="/signup"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-violet-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-pink-500/40"
            >
              Get Started ↗
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-6 transition-colors duration-500 dark:border-white/10">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400 md:flex-row">
            <p>© {new Date().getFullYear()} Artiva. All rights reserved.</p>

            <div className="flex gap-6">
              <Link href="/privacy" className="transition hover:text-pink-500">
                Privacy
              </Link>
              <Link href="/terms" className="transition hover:text-pink-500">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;