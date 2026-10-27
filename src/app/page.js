
import { Suspense } from "react";
import Header from "./components/Header";
import BreedGallery from "./components/BreedGallery";
import Footer from "./components/Footer";
import "./globals.css";

// Henter hunderacer fra TheDogAPI
async function FetchData() {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds", {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`API-fejl: ${response.status}`);
    }

    const breeds = await response.json();

    return <BreedGallery breeds={breeds} />;
  } catch (error) {
    console.error("Kunne ikke hente hunderacer:", error);

    return (
      <p className="mx-4 my-6">
        Hundene kunne ikke indlæses. Prøv igen senere.
      </p>
    );
  }
}

// Vises mens hundedataene hentes
function LoadingFallback() {
  return <p className="mx-4 my-6">Indlæser hunderacer...</p>;
}

// ListView
export default function ListView() {
  return (
    <>
      <Header />

      <div className="mx-4">
        <h2>ListView</h2>
      </div>

      <Suspense fallback={<LoadingFallback />}>
        <FetchData />
      </Suspense>

      <Footer />
    </>
  );
}
