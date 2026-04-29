import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
const PhotoCard = ({ photo }) => {
  console.log(photo);
  return (
    <Card className="border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

          alt={photo.title}
          className="object-cover rounded-xl"
        />
        <Chip  color="success" className="absolute opacity80 right-2 top-2 " size="sm">{photo.category}</Chip>
      </div>

      <div>
        <h2 className="font-medium">{photo.title}</h2>
      </div>
      <div className="flex  gap-5">
        <div className="flex items-center gap-2">
          <p>
            <FaHeart />
          </p>
          <p>{photo.likes}</p>
        </div>

        <Separator orientation="vertical" />

        <div className="flex items-center gap-2">
          <p>
            <IoMdDownload />
          </p>
          <p>{photo.downloads}</p>
        </div>
      </div>
      <Button variant="outline" className='w-full'>View</Button>
    </Card>
  );
};

export default PhotoCard;
