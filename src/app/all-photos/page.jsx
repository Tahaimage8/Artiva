import PhotoCard from "@/compornents/PhotoCard";
import React from "react";

const AllPhotosPage = async () => {
  const res = await fetch("https://artiva-ai.vercel.app/data.json");
  const data = await res.json();
  // console.log(data)
  return (
    <div>
      <h1 className="text-2xl font-bold m-4">All AI Creations</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
        {data.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
