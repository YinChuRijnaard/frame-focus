import Image from "next/image";

type PhotoCardProps = {
  src: string;
  alt: string;
};

const PhotoCard = ({ src, alt }: PhotoCardProps) => {
  return (
    <div>
      <Image
        // @ts-ignore
        src={src}
        height={500}
        width={500}
        alt={"alt"}
        className="w-auto p-2 rounded-xl"
      />
    </div>
  );
};

export default PhotoCard;
