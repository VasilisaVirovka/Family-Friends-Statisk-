
import Link from "next/link";
import Header from "./components/Header";
import BreedCard from "./components/BreedCard";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import "./globals.css";

// Data til hundekortene
const breeds = [
  {
    id: 1,
    image: "/dummydog.jpg",
    name: "Hund 1",
    origin: "Oprindelse 1",
  },
  {
    id: 2,
    image: "/dummydog.jpg",
    name: "Hund 2",
    origin: "Oprindelse 2",
  },
  {
    id: 3,
    image: "/dummydog.jpg",
    name: "Hund 3",
    origin: "Oprindelse 3",
  },
  {
    id: 4,
    image: "/dummydog.jpg",
    name: "Hund 4",
    origin: "Oprindelse 4",
  },
  {
    id: 5,
    image: "/dummydog.jpg",
    name: "Hund 5",
    origin: "Oprindelse 5",
  },
  {
    id: 6,
    image: "/dummydog.jpg",
    name: "Hund 6",
    origin: "Oprindelse 6",
  },
];

export default function ListView() {
  return (
    <>
      {/* Header med logo og notifikationer */}
      <Header />

      {/* Sidens overskrift og navigation */}
      <div className="mx-4">
        <h2>ListView</h2>

        <Link href="/detailview">
          Go to DetailView
        </Link>
      </div>

      {/* Søgefelt */}
      <SearchBar />

      {/* Grid med hundekort */}
      <div className="mx-4 my-6 grid w-auto grid-cols-2 gap-4 overflow-hidden rounded-xl">
        {breeds.map((breed) => (
          <BreedCard
            key={breed.id}
            image={breed.image}
            name={breed.name}
            origin={breed.origin}
          />
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

