import Image from "next/image";
import BlogList from "./blogs/page";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <BlogList />
    </main>
  );
}
