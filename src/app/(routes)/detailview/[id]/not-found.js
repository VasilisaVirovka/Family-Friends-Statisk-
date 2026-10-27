
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">Dog not found</h1>
      <p className="mt-2 text-gray-500">
        Sorry, we could not find this dog breed.
      </p>
      <Link
        href="/"
        className="mt-4 underline"
      >
        Back to ListView
      </Link>
    </div>
  );
};

export default NotFound;
