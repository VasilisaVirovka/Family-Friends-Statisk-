import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import IconStar from "../../components/IconStar";

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

      {/* Billede med ikon ovenpå */}
      <div className="relative m-4">
        <Image
          src="/dummydog.jpg"
          alt="Dummy dog"
          width={800}
          height={500}
          className="h-auto w-full rounded-xl object-cover shadow-lg"
        />

        {/* Ikonet placeres ovenpå billedet i højre side */}
        <div className="absolute right-3 top-3 z-10">
          <IconStar />
        </div>
      </div>

      {/* Overskrift over boksene */}
      <div className="mx-4">
        <h1 className="text-2xl font-bold text-foreground my-2">
          Overskrift
        </h1>
      </div>

      {/* Kategorier */}
      <div className="ml-4 mt-0 flex gap-4">
        <div className="rounded-full bg-[var(--color-blue)] p-2 text-xs">
          Box 1
        </div>

        <div className="rounded-full bg-[var(--color-pink)] p-2 text-xs">
          Box 2
        </div>

        <div className="rounded-full bg-[var(--color-green)] p-2 text-xs">
          Box 3
        </div>

        <div className="rounded-full bg-[var(--color-yellow)] p-2 text-xs">
          Box 4
        </div>
      </div>

      {/* Beskrivelse */}
      <div className="mx-4 mt-6">

        <h2 className="mt-4 text-lg font-semibold">
          Underoverskrift
        </h2>

        <p className="mt-2 text-sm leading-6 text-foreground">
          Esse convallis justo in est ullamcorper blandit.
          Praesent gravida, dui quis condimentum pretium,
          sem quam pretium lacus, mattis lobortis ipsum
          augue in augue.
        </p>

        <h2 className="mt-6 text-lg font-semibold">
          Underoverskrift
        </h2>

        <p className="mt-2 text-sm leading-6 text-foreground">
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
