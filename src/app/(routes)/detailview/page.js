import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaRegStar } from "react-icons/fa";

const DetailView = () => {
  return (
    <>
      {/* Header med logo og notifikationer */}
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

      {/* Billede med ikoner og avatarboks ovenpå */}
      <div className="relative m-4">
        <Image
          src="/dummydog.jpg"
          alt="Dummy dog"
          width={800}
          height={500}
          className="h-auto w-full rounded-xl object-cover shadow-lg"
        />

        {/* Tilbage-pil i øverste venstre hjørne */}
        <Link
          href="/"
          aria-label="Tilbage til oversigten"
          className="absolute left-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-black transition-opacity duration-200 hover:opacity-70"
        >
          <IoIosArrowBack size={28} />
        </Link>

        {/* Stjerne i øverste højre hjørne */}
<div className="absolute right-3 top-3 z-10">
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30">
    <FaRegStar size={24} className="text-white" />
  </div>
</div>

        {/* Gennemsigtig avatarboks i nederste venstre hjørne */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-3 rounded-xl bg-white/75 p-3 backdrop-blur-sm">
          {/* Avatar - udskift billedstien, hvis dit gule billede hedder noget andet */}
          <Image
            src="/dummydog.jpg"
            alt="Avatar"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />

          {/* Tekst ved siden af avataren */}
          <div>
            <p className="text-sm font-semibold text-gray-800">
              Hundens navn
            </p>

            <p className="text-xs text-gray-500">
              Race eller beskrivelse
            </p>
          </div>
        </div>
      </div>

      {/* Overskrift over boksene */}
      <div className="mx-4">
        <h1 className="my-2 text-2xl font-bold text-foreground">
          Overskrift
        </h1>
      </div>

      {/* Kategorier */}
      <div className="ml-4 mt-0 flex gap-4">
        <div className="rounded-full bg-[var(--color-blue)] p-2 text-xs text-gray-500">
          Trait 1
        </div>

        <div className="rounded-full bg-[var(--color-pink)] p-2 text-xs text-gray-500">
          Trait 2
        </div>

        <div className="rounded-full bg-[var(--color-green)] p-2 text-xs text-gray-500">
          Trait 3
        </div>

        <div className="rounded-full bg-[var(--color-yellow)] p-2 text-xs text-gray-500">
          Trait 4
        </div>
      </div>

      {/* Beskrivelse */}
      <div className="mx-4 mt-6">
        <h2 className="mt-4 text-lg font-semibold">
          Underoverskrift
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Esse convallis justo in est ullamcorper blandit.
          Praesent gravida, dui quis condimentum pretium,
          sem quam pretium lacus, mattis lobortis ipsum
          augue in augue.
        </p>

        <h2 className="mt-6 text-lg font-semibold">
          Underoverskrift
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Esse convallis justo in est ullamcorper blandit.
          Praesent gravida, dui quis condimentum pretium,
          sem quam pretium lacus, mattis lobortis ipsum
          augue in augue.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default DetailView;