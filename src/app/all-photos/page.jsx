import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";
import React from "react";

const AllPhotosPage = async ({ searchParams }) => {
  const category = searchParams?.category;

  const res = await fetch("https://artiva-ai.vercel.app/data.json", {
    cache: "no-store",
  });

  const data = await res.json();

  const filteredPhotos = category
    ? data.filter(
        (photo) =>
          photo.category?.toLowerCase() === category.toLowerCase()
      )
    : data;

  return (
    <div>
      <h1 className="text-2xl font-bold m-4">All AI Creations</h1>

      <Category />

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;