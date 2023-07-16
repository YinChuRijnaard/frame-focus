import client from "@/sanity/client";

import PhotoCard from "./PhotoCard";

const AllPhotos = async () => {
  const allPhotoDetails =
    await client.fetch(`*[_type == "photos" && defined(image.asset._ref) && banner != true && featured != true]{
        ...,
        "imageUrls": image.asset->url
      }`);

  return (
    <div className="bg-green-300 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {allPhotoDetails?.map((photo: any) => (
        <div key={photo._id}>
          <PhotoCard title={photo.name} src={photo.imageUrls} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default AllPhotos;
