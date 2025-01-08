import Image from "next/image";
import Head from "next/head";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-gray-900">
      <Head>
        <title>My Blog</title>
      </Head>

      {/* Hero Section */}
      <div className="wrapper flex min-h-screen flex-col items-center justify-center py-24">
        <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full">
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            fill
            className="object-cover object-left"
          />
        </div>
        <div className="mx-auto text-center">
          <h1 className="text-6xl font-bold">My Blog</h1>
          <p className="my-4 text-lg">
            Welcome to my blog! This is where I share my thoughts on all things
            tech.
          </p>
          <div className="flex justify-center gap-4">
            <FaReact className="h-12 w-12" />
            <SiTailwindcss className="h-12 w-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
