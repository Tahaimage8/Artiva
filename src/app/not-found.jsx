import Link from "next/link";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 text-white">
      <div className="absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[120px]" />
      <div className="absolute right-20 top-20 h-40 w-40 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute bottom-20 left-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

      <section className="relative z-10 max-w-2xl text-center">
        <p className="mx-auto mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-gray-300 backdrop-blur">
          Lost in the AI gallery
        </p>

        <h1 className="bg-linear-to-r from-pink-500 via-purple-500 to-violet-600 bg-clip-text text-8xl font-black text-transparent md:text-9xl">
          404
        </h1>

        <h2 className="mt-5 text-3xl font-bold md:text-4xl">Page Not Found</h2>

        <p className="mx-auto mt-4 max-w-md text-gray-400">
          The page you are looking for doesn’t exist, was moved, or the link is
          incorrect.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:scale-105"
          >
            Go Home
          </Link>

          <Link
            href="/all-photos"
            className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Explore Photos
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
