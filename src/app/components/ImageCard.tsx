import React from "react";
import Image from "next/image";

type ImageCardProps = {
  img: string;
  imgAlt: string;
  title: string;
  description: string;
  createdAt: string;
};
const ImageCard = ({
  img,
  imgAlt,
  title,
  description,
  createdAt,
}: ImageCardProps) => {
  return (
    <div className="group relative max-w-lg">
      <div className="relative mb-4 h-64 w-full overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={imgAlt}
          fill={true}
          objectFit={"cover"}
          className="default-transition hover:scale-105"
        />
      </div>
      <p className="heading-3">{title}</p>
      <p className="body-text-small text-gray-500">{createdAt}</p>
      <p className="body-text mt-2 line-clamp-3 hover:underline">
        {description}
      </p>
    </div>
  );
};

export default ImageCard;
