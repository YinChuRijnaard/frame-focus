import client from "@/sanity/client";
import Image from "next/image";

const BannerCard = async () => {
  const banner = await client.fetch(`*[banner == true]`);
  const src = await client.fetch(`*[banner == true]{
      "imageUrl": image.asset->url
    }`);

  const url = src[0].imageUrl;

  return (
    <>
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
    </>
  );
};

export default BannerCard;
