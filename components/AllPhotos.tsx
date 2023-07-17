import client from "@/sanity/client";

import PhotoCard from "./PhotoCard";

const AllPhotos = async () => {
  const allPhotoDetails =
    await client.fetch(`*[_type == "photos" && defined(image.asset._ref) && banner != true && featured != true]{
        ...,
        "imageUrls": image.asset->url
      }`);

  return (
    // <div className="grid grid-cols-2 gap-4 grid-flow-row sm:grid-cols-3">
    <div className="masonry sm:masonry-sm md:masonry-md 2xl:masonry-2xl">
      {allPhotoDetails?.map((photo: any) => (
        <div key={photo._id}>
          <PhotoCard src={photo.imageUrls} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default AllPhotos;
