import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden rounded-2xl">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://i.pinimg.com/1200x/8a/fe/83/8afe83b98f339de4c1dd34fde26a86d0.jpg"
          alt="banner"
          fill 
          priority
          className=" object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/40" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 text-white">
          

          <span className="inline-block mb-4 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur">
            🚀 AI Powered Art Generator
          </span>


          <h1 className="max-w-3xl text-4xl md:text-6xl font-extrabold leading-tight">
            Turn Ideas Into{" "}
            <span className="bg-linear-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
              Stunning AI Art
            </span>
          </h1>

    
          <p className="mt-5 max-w-xl text-lg md:text-xl text-gray-300">
            Create high-quality images from simple text prompts using powerful
            AI models. Fast, creative, and limitless possibilities.
          </p>

     
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/generate">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 to-violet-600 px-6 py-2 text-white font-semibold shadow-xl hover:scale-105 transition">
                ✨ Generate Now
              </Button>
            </Link>

            <Link href="/pricing">
              <Button
                variant="bordered"
                className="border-white/30 text-white hover:bg-white/10 transition"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-black to-transparent" />
    </section>
  );
};

export default Banner;