
"use client";

import { useState } from "react";
import BreedCard from "./BreedCard";
import SearchBar from "./SearchBar";

const BreedGallery = ({ breeds }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase().trim()),
  );

  return (
    <>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <div className="mx-4 my-6 grid w-auto grid-cols-2 gap-4 overflow-hidden rounded-xl">
        {filteredBreeds.length > 0 ? (
          filteredBreeds.map((breed) => (
            <BreedCard
              key={breed.id}
              id={breed.id}
              image={breed.image.url}
           imageId={breed.image.id}
              name={breed.name}
              origin={breed.origin}
            />
          ))
        ) : (
          <p className="col-span-2 py-6 text-center text-gray-500">
            No breeds found.
          </p>
        )}
      </div>
    </>
  );
};

export default BreedGallery;
