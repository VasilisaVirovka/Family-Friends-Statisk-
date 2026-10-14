
import Image from "next/image";

const BreedCard = () => {
  return (
    <section className="mb-4 w-full overflow-hidden rounded-xl bg-white shadow-lg">
      <Image
        src="/dummydog.jpg"
        alt="Dummy dog"
        width={160}
        height={114}
        className="h-auto w-full rounded-xl object-cover shadow-lg"
      />

      <h3 className="p-1 pl-2 text-xl font-bold text-foreground">
        Overskrift
      </h3>

      <p className="pl-2 text-base text-gray-500">
        Lorem ipsum
      </p>

      <p className="pb-2 pl-2 text-base text-gray-500">
        Lorem ipsum
      </p>
    </section>
  );
};

export default BreedCard;
