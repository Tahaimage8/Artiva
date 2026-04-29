import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://artiva-ai.vercel.app/data.json", {
    cache: "no-store",
  });

  const data = await res.json();
  const photo = data.find((p) => p.id == id);

  if (!photo) return notFound();

  const {
    title,
    imageUrl,
    prompt,
    category,
    model,
    resolution,
    likes,
    downloads,
    createdAt,
    tags,
  } = photo;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-4 py-10 md:py-16">
        <Link
          href="/all-photos"
          className="mb-6 inline-block text-sm text-gray-400 transition hover:text-pink-400"
        >
          ← Back to all photos
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
  
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-pink-500/10">
            <div className="relative aspect-square w-full">
              <Image
                src={imageUrl}
                alt={title}
                fill
                priority
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="absolute left-4 top-4 rounded-full bg-black/60 px-4 py-1 text-sm font-medium backdrop-blur">
              {category}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="mb-3 inline-block rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1 text-sm text-pink-300">
                AI Generated Artwork
              </p>

              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                {title}
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
                {prompt}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-400">Likes</p>
                <h3 className="mt-1 text-2xl font-bold">{likes}</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-400">Downloads</p>
                <h3 className="mt-1 text-2xl font-bold">{downloads}</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-400">Model</p>
                <h3 className="mt-1 text-sm font-bold">{model}</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-400">Resolution</p>
                <h3 className="mt-1 text-sm font-bold">{resolution}</h3>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-xl font-bold">Artwork Details</h2>

              <div className="space-y-3 text-sm text-gray-300">
                <p>
                  <span className="text-gray-500">Category:</span> {category}
                </p>
                <p>
                  <span className="text-gray-500">Created:</span>{" "}
                  {new Date(createdAt).toLocaleDateString()}
                </p>
                <p>
                  <span className="text-gray-500">AI Model:</span> {model}
                </p>
                <p>
                  <span className="text-gray-500">Size:</span> {resolution}
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold">Tags</h2>
              <div className="flex flex-wrap gap-3">
                {tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-pink-500/50 hover:text-pink-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={imageUrl}
                target="_blank"
                className="rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:scale-105"
              >
                View Full Image
              </Link>

              <Link
                href="/all-photos"
                className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PhotoDetailsPage;