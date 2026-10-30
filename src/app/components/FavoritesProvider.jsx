
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoriteRecords, setFavoriteRecords] = useState([]);
  const [subId, setSubId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Opret eller hent brugerens faste ID
  useEffect(() => {
    let savedSubId = localStorage.getItem("dog-favorites-sub-id");

    if (!savedSubId) {
      savedSubId = crypto.randomUUID();
      localStorage.setItem("dog-favorites-sub-id", savedSubId);
    }

    setSubId(savedSubId);
  }, []);

  // Hent brugerens favoritter fra TheDogAPI
  useEffect(() => {
    if (!subId) return;

    async function fetchFavorites() {
      const response = await fetch(
        `/api/favourites?sub_id=${encodeURIComponent(subId)}`,
      );

      if (!response.ok) {
        console.error("Kunne ikke hente favoritter");
        return;
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        setFavoriteRecords(data);
      }
    }

    fetchFavorites();
  }, [subId]);

  // Lav en liste med billed-ID'er
  const favoriteIds = favoriteRecords.map(
    (favorite) => favorite.image_id,
  );

  // Tilføj eller fjern en favorit
  const toggleFavorite = async (imageId) => {
    if (!subId || loading) return;

    setLoading(true);

    try {
      const existingFavorite = favoriteRecords.find(
        (favorite) => favorite.image_id === imageId,
      );

      if (existingFavorite) {
        // Fjern favorit
        const response = await fetch(
          `/api/favourites?id=${encodeURIComponent(existingFavorite.id)}`,
          {
            method: "DELETE",
          },
        );

        if (!response.ok) {
          throw new Error("Kunne ikke fjerne favorit");
        }

        setFavoriteRecords((currentFavorites) =>
          currentFavorites.filter(
            (favorite) => favorite.id !== existingFavorite.id,
          ),
        );
      } else {
        // Tilføj favorit
        const response = await fetch("/api/favourites", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image_id: imageId,
            sub_id: subId,
          }),
        });

        if (!response.ok) {
          throw new Error("Kunne ikke tilføje favorit");
        }

        const newFavorite = await response.json();

        setFavoriteRecords((currentFavorites) => [
          ...currentFavorites,
          newFavorite,
        ]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favoriteIds, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
