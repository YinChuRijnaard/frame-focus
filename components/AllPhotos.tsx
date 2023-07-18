import client from "@/sanity/client";

import PhotoCard from "./PhotoCard";

const AllPhotos = async () => {
  const allPhotoDetails =
    await client.fetch(`*[_type == "photos" && defined(image.asset._ref) && isBanner != true && isFeatured != true]{
        ...,
        likes,
        "imageUrls": image.asset->url
      }`);

  return (
    <div className="masonry sm:masonry-sm md:masonry-md 2xl:masonry-2xl">
      {allPhotoDetails?.map((photo: any) => (
        <div key={photo._id}>
          <PhotoCard
            likes={photo.likes}
            src={photo.imageUrls}
            alt={photo.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default AllPhotos;
