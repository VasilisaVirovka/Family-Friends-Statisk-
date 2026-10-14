import Link from "next/link";
import Header from "./components/Header";
import BreedCard from "./components/BreedCard";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import "./globals.css";

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
      <div className="mx-4 my-6 grid grid-cols-2 gap-4 w-auto overflow-hidden rounded-xl">
        <BreedCard />
        <BreedCard />
        <BreedCard />
        <BreedCard />
        <BreedCard />
        <BreedCard />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

/* Dette er index'siden */

/* Impotere BreedCard og benytter det på siden */
