
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useFavorites } from "./FavoritesProvider";

const BreedCard = ({ id, image, name, origin }) => {
  const { favoriteIds, toggleFavorite } = useFavorites();

  const isFavorite = favoriteIds.includes(id);

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

      <button
        type="button"
        onClick={() => toggleFavorite(id)}
        aria-label={isFavorite ? "Fjern fra favoritter" : "Tilføj til favoritter"}
        aria-pressed={isFavorite}
        className="absolute right-3 top-3"
      >
        {isFavorite ? (
          <FaStar className="text-yellow-400" />
        ) : (
          <FaRegStar className="text-gray-500" />
        )}
      </button>
    </section>
  );
};

export default BreedCard;


