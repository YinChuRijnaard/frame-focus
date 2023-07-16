import Image from "next/image";

type PhotoCardProps = {
  title: string;
  src: string;
  alt: string;
};

const PhotoCard = ({ title, src, alt }: PhotoCardProps) => {
  return (
    <div className="border border-black">
      <p>{title}</p>
      <Image
        // @ts-ignore
        src={src}
        height={500}
        width={600}
        alt={"alt"}
        className="w-auto"
      />
    </div>
  );
};

export default PhotoCard;
