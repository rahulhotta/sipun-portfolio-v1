"use client";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const pathname = usePathname();
  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "About" },
    { name: "Works", path: "Works" },
    { name: "Contact", path: "Contact" },
  ];
  return (
    <header>
      <h3>LOGO</h3>
      <nav ref={navRef}>
        <div className="drawer__container">
          {pages.map((page) => (
            <div
              key={page.name}
              className={
                pathname == `/${page.path}`
                  ? "active"
                  : "" || pathname == `${page.path}`
                  ? "active"
                  : ""
              }
            >
              <Link href={page.path} className="navbar__navLink">
                {page.name}
              </Link>
            </div>
          ))}
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
