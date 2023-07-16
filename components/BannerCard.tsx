import client from "@/sanity/client";
import Image from "next/image";

const BannerCard = async () => {
  const banner = await client.fetch(`*[banner == true]`);
  const src = await client.fetch(`*[banner == true]{
      "imageUrl": image.asset->url
    }`);

  const url = src[0].imageUrl;

  return (
    <div className="mb-16">
      {banner?.map((x: any) => (
        <div key={x._id} className="space-y-4">
          <Image
            src={url}
            height={600}
            width={700}
            alt={x.alt}
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default BannerCard;
