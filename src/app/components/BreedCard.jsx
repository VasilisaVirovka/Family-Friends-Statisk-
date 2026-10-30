
"use client";

import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

const BreedCard = ({ id, image, imageId, name, origin }) => {
  return (
    <section className="breed-card relative mb-4 w-full overflow-hidden">
      <Link href={`/detailview/${id}`} className="block">
        <Image
          src={image}
          alt={name}
          width={500}
          height={350}
          className="h-56 w-full object-cover"
        />

        <div className="p-4">
          <h3>{name}</h3>
          <p>{origin}</p>
        </div>
      </Link>

      <div className="absolute right-3 top-3">
        <FavoriteButton id={imageId} />
      </div>
    </section>
  );
};

export default BreedCard;



