import PhotoCard from "./PhotoCard";

const FeaturedAICreations = async () => {
  const res = await fetch("https://artiva-ai.vercel.app/data.json");
  const data = await res.json();
  const topPhotos = data.slice(0, 8);
  return (
    <div>
      <h1 className="text-2xl font-bold my-5">Featured AI Creations</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedAICreations;
