import client from "@/sanity/client";
import Image from "next/image";

const FeaturedCard = async () => {
  const featured = await client.fetch(`*[featured == true]`);
  const src = await client.fetch(`*[featured == true]{
    "imageUrl": image.asset->url
  }`);

  const url = src[0].imageUrl;

  return (
    <section className="bg-neutral-100 border border-neutral-300 p-8 w-fit mx-auto rounded">
      <h1 className="title_text font-bebas text-center">Featured</h1>

      {featured?.map((x: any) => (
        <div key={x._id} className="space-y-4">
          <Image
            src={url}
            height={600}
            width={700}
            alt={x.alt}
            className="mx-auto"
          />
        </div>
      ))}
    </section>
  );
};

export default FeaturedCard;
