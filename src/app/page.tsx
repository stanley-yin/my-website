import Image from "next/image";
import Head from "next/head";
import { FaGithub } from "react-icons/fa6";

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
          <h1 className="text-6xl font-bold">{`Hi I'm Stanley`}</h1>
          <p className="my-4 text-left text-lg">
            擁有近 3 年網站及系統開發經驗，擅長使用 React、Rails
            全端開發，具備多品牌網站架設與效能優化實務經驗。
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/stanley-yin"
              target="_blank"
              className="default-transition hover:text-gray-600"
            >
              <FaGithub size={50} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
