
"use client";

import { FaRegStar, FaStar } from "react-icons/fa";
import { useFavorites } from "./FavoritesProvider";

const FavoriteButton = ({ id }) => {
  const { favoriteIds, toggleFavorite } = useFavorites();

  const isFavorite = favoriteIds.includes(id);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(id)}
      aria-label={isFavorite ? "Fjern fra favoritter" : "Tilføj til favoritter"}
      aria-pressed={isFavorite}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30"
    >
      {isFavorite ? (
        <FaStar size={24} className="text-yellow-400" />
      ) : (
        <FaRegStar size={24} className="text-white" />
      )}
    </button>
  );
};

export default FavoriteButton;
