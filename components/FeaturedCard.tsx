import client from "@/sanity/client";
import Image from "next/image";

const FeaturedCard = async () => {
  const featured = await client.fetch(`*[featured == true]{
    ...,
    "imageUrl": image.asset->url
  }`);
  console.log(featured);
  return (
    <section className="bg-neutral-100 border border-neutral-200 space-y-2 p-4 w-fit mx-auto rounded">
      <h1 className="subtitle_text font-caveat text-center">
        Featured: {featured?.map((x: any) => <span key={x._id}>{x.name}</span>)}
      </h1>

      {featured?.map((x: any) => (
        <div key={x._id} className="space-y-4">
          <Image
            src={x.imageUrl}
            height={500}
            width={600}
            alt={x.alt}
            className="w-auto mx-auto"
          />
        </div>
      ))}
    </section>
  );
};

export default FeaturedCard;
