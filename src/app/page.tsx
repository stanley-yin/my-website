import Image from "next/image";
import Head from "next/head";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

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
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-6xl font-bold">{`Hi I'm Stanley Yin`}</h1>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="https://github.com/stanley-yin"
              target="_blank"
              className="default-transition hover:text-gray-600"
            >
              <FaGithub size={50} />
            </a>
            <a
              href="https://www.linkedin.com/in/stanley-yin-9987ba190/"
              target="_blank"
              className="default-transition hover:text-gray-600"
            >
              <FaLinkedin size={50} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
