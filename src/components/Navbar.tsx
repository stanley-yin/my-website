import Link from "next/link";
import { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

const MenuItems = () => {
  const menuList = [
    {
      label: "Resume",
      link: "resume",
    },
    {
      label: "Projects",
      link: "projects",
    },
    {
      label: "Posts",
      link: "posts",
    },
  ];

  const menu = menuList.map((item, index) => {
    const { label, link } = item;
    return (
      <Link href={`/${link}`} className="hover:text-blue-700" key={index}>
        {label}
      </Link>
    );
  });
  return <>{menu}</>;
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleNavbar() {
    const navbarToggle = document.querySelector(".navbar-toggle");
    navbarToggle?.classList.toggle("open");
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="fixed z-20 w-full border bg-white">
      <div className="wrapper flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-16 text-2xl font-bold">
            Stanley Yin
          </Link>
          <div className="hidden gap-12 md:flex">
            <MenuItems />
          </div>
        </div>
        <Link
          href={"/studio"}
          target="_blank"
          className="hidden sm:inline-block"
        >
          <IoPersonCircleOutline size={28} />
        </Link>
        <div className="navbar ml-auto md:hidden">
          <div className="navbar-toggle" onClick={toggleNavbar}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
      <div
        className={`mx-auto flex flex-col gap-4 overflow-hidden text-center transition-all duration-300 md:hidden ${
          menuOpen ? "h-40" : "h-0"
        }`}
      >
        <MenuItems />
      </div>
    </div>
  );
}
