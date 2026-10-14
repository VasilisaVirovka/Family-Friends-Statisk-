import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="p-4 text-foreground text-1xl font-bold transition-opacity duration-200 hover:opacity-60">
        FamilyFriends
      </h1>
    </Link>
  );
};

export default Logo;

/* Et komponent er en JavaScript-funktion */

/* Default export gør det muligt at importere komponentet
   der, hvor vi skal bruge det */
   
/* I Next.js benytter vi className i stedet for class */
