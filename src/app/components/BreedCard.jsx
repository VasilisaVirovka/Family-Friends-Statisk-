
import Image from "next/image";

const BreedCard = ({ image, name, origin }) => {
  return (
    <section className="breed-card mb-4 w-full overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={160}
        height={114}
        className="h-auto w-full object-cover object-[center_40%]"
      />

      <h3 className="p-1 pl-2 text-xl font-bold text-foreground">
        {name}
      </h3>

      <p className="pb-2 pl-2 text-base text-gray-500">
        {origin}
      </p>
    </section>
  );
};

export default BreedCard;
