"use client";
import Image from "next/image";
import { useEffect } from "react";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log("error :", error);
  }, [error]);

  return (
    <div className="flex flex-col w-full h-full justify-center">
      <Image
        className="mx-auto border-none"
        src="/not-found.jpg"
        width={660}
        height={240}
        alt="Not found"
      />
      <h2 className="mx-auto my-8 font-bold text-xl">
        Detail Something went wrong!
      </h2>
      <button
        className="bg-red-300 text-white min-w-32 p-4 mx-auto rounded-lg font-bold text-xl"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
