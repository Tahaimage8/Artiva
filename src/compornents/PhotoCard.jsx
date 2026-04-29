import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const PhotoCard = ({ photo }) => {
  console.log(photo);
  return (
    <Card className="group border rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20">
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={photo.imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={photo.title}
          className="object-cover rounded-xl transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
        />

        <div className="absolute inset-0 rounded-xl bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <Chip
          color="success"
          className="absolute right-2 top-2 opacity-90 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
          size="sm"
        >
          {photo.category}
        </Chip>
      </div>

      <div className="p-3">
        <h2 className="font-medium transition-colors duration-300 group-hover:text-pink-500">
          {photo.title}
        </h2>
      </div>

      <div className="flex gap-5 px-3 pb-3">
        <div className="flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-pink-500">
          <p>
            <FaHeart />
          </p>
          <p>{photo.likes}</p>
        </div>

        <Separator orientation="vertical" />

        <div className="flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-violet-500">
          <p>
            <IoMdDownload />
          </p>
          <p>{photo.downloads}</p>
        </div>
      </div>

      <div className="px-3 pb-3">
        <Button
          variant="outline"
          className="w-full transition-all duration-300 hover:scale-[1.03] hover:bg-linear-to-r hover:from-pink-500 hover:to-violet-600 hover:text-white"
        >
          View
        </Button>
      </div>
    </Card>
  );
};

export default PhotoCard;