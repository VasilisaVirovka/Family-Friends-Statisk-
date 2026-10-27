
"use client";

import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const toggleFavorite = (id) => {
    setFavoriteIds((currentFavorites) =>
      currentFavorites.includes(id)
        ? currentFavorites.filter((favoriteId) => favoriteId !== id)
        : [...currentFavorites, id],
    );
  };

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
