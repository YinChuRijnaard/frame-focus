"use client";

import { updateLikes } from "@/utils/updateLikes";

import Image from "next/image";

type PhotoCardProps = {
  likes: number;
  src: string;
  alt: string;
};

const PhotoCard = ({ likes, src, alt }: PhotoCardProps) => {
  return (
    <div className="relative">
      <div className="text-white flex items-center justify-end space-x-2 absolute top-0 right-0 p-4">
        <i className="ri-heart-line cursor-pointer" onClick={updateLikes}></i>
        <p>{likes > 0 ? likes : 0}</p>
      </div>
      <Image
        // @ts-ignore
        src={src}
        height={500}
        width={500}
        alt={alt}
        className="w-auto p-2 rounded-xl"
      />
    </div>
  );
};

export default PhotoCard;
