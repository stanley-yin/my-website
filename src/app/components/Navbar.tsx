import Link from "next/link";
import { useState } from "react";

const MenuItems = () => {
  const menuList = [
    {
      label: "About",
      link: "about",
    },
    {
      label: "Posts",
      link: "posts",
    },
    {
      label: "Projects",
      link: "projects",
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
      <div className="wrapper flex h-16 items-center">
        <Link href="/" className="mr-16 text-2xl font-bold">
          Stanley Yin
        </Link>
        <div className="hidden gap-12 md:flex">
          <MenuItems />
        </div>
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
