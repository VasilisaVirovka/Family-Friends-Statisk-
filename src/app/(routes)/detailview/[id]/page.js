
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FavoriteButton from "../../../components/FavoriteButton";

const DetailView = async ({ params }) => {
  // Hent hundens ID fra URL'en
  const { id } = await params;

  // Hent den specifikke hund fra TheDogAPI
  const response = await fetch(
    `https://api.thedogapi.com/v1/breeds/${id}`,
    {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    },
  );

  // Hvis hunden ikke findes
  if (response.status === 404) {
    notFound();
  }

  // Kontrollér om API-kaldet lykkedes
  if (!response.ok) {
    throw new Error("Kunne ikke hente hundens oplysninger");
  }

  // Konvertér API-data til JSON
  const breed = await response.json();

  // Hent hundens billede
  const image = breed.image?.url || "/dummydog.jpg";
const imageId = breed.image?.id
  return (
    <>
      {/* Header */}
      <Header />

      {/* Sidens overskrift og navigation */}
      <div className="mx-4">
        <h1 className="text-2xl font-bold text-foreground">
          DetailView
        </h1>

        <Link
          href="/"
          className="text-sm text-foreground transition-opacity duration-200 hover:opacity-60"
        >
          Back to ListView
        </Link>
      </div>

      {/* Billede med ikoner og avatarboks */}
      <div className="relative m-4">
        <Image
          src={image}
          alt={breed.name}
          width={800}
          height={500}
          className="h-auto w-full rounded-xl object-cover shadow-lg"
        />

        {/* Tilbage-pil */}
        <Link
          href="/"
          aria-label="Tilbage til oversigten"
          className="absolute left-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-black transition-opacity duration-200 hover:opacity-70"
        >
          <IoIosArrowBack size={28} />
        </Link>

        {/* Favoritstjerne */}
        <div className="absolute right-3 top-3 z-10">
       
{imageId && <FavoriteButton id={imageId} />}

        </div>

        {/* Avatarboks */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-3 rounded-xl bg-white/75 p-3 backdrop-blur-sm">
          <Image
            src={image}
            alt={breed.name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <p className="text-sm font-semibold text-gray-800">
              {breed.name}
            </p>

            <p className="text-xs text-gray-500">
              {breed.origin || "Ukendt oprindelse"}
            </p>
          </div>
        </div>
      </div>

      {/* Hundens navn */}
      <div className="mx-4">
        <h1 className="my-2 text-2xl font-bold text-foreground">
          {breed.name}
        </h1>
      </div>

      {/* Kategorier */}
      <div className="ml-4 mt-0 flex flex-wrap gap-4">
        {breed.breed_group && (
          <div className="rounded-full bg-(--color-blue) p-2 text-xs text-gray-500">
            {breed.breed_group}
          </div>
        )}

        {breed.origin && (
          <div className="rounded-full bg-(--color-pink) p-2 text-xs text-gray-500">
            {breed.origin}
          </div>
        )}

        {breed.life_span && (
          <div className="rounded-full bg-(--color-green) p-2 text-xs text-gray-500">
            {breed.life_span}
          </div>
        )}

        {breed.weight?.metric && (
          <div className="rounded-full bg-(--color-yellow) p-2 text-xs text-gray-500">
            {breed.weight.metric} kg
          </div>
        )}
      </div>

      {/* Beskrivelse */}
      <div className="mx-4 mt-6">
        {breed.bred_for && (
          <>
            <h2 className="mt-4 text-lg font-semibold">
              Originally bred for
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              {breed.bred_for}
            </p>
          </>
        )}

        {breed.temperament && (
          <>
            <h2 className="mt-6 text-lg font-semibold">
              Temperament
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              {breed.temperament}
            </p>
          </>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default DetailView;

