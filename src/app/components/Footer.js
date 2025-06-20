"use client"
import { Link, Element, animateScroll as scroll } from "react-scroll";

function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <>
      <div className="container mx-auto flex items-center justify-center flex-col leading-[3.1] pt-12 pb-6">
        <img
          src="/HJ.png"
          className="footer_img w-[80px] h-[55px]"
          alt=""
        />
        <ul className="footer_ul flex items-center justify-center gap-6 flex-wrap font-sans font-semibold mt-6">
          <li>
            <Link
              className="nav_link"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="nav_active"
              to="About"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="nav_link"
              activeClass="nav_active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              to="Portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="nav_link"
              activeClass="nav_active"
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              to="Skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="nav_link"
              activeClass="nav_active"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              to="Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <h3 className="footer_copyright flex items-center flex-col text-[#7957d1eb] text-[16px] font-[300] sm:block">
          &copy; {currentYear} All rights reserved by {""}
          <span className="font-12 text-white font-semibold">
            Hassanjavaid!
          </span>
        </h3>
      </div>
    </>
  );
}

export default Footer;
