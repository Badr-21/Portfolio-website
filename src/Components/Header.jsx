/* eslint-disable react/prop-types */
import Logo from "../assets/logo.svg";
import HamburgerIcon from "../assets/hamburger-icon.svg";
import CloseIcon from "../assets/close-icon.svg";
import { useEffect, useState } from "react";

function Header({
   homeRef,
   aboutMeRef,
   myProjectsRef,
   contactMeRef,
   handleScrollTo,
   setShow,
   show,
}) {
   const [lastScrollY, setLastScrollY] = useState(0);

   const controlHeader = () => {
      if (window.scrollY > lastScrollY) {
         setShow(false);
      } else {
         setShow(true);
      }
      setLastScrollY(window.scrollY);
   };
   useEffect(() => {
      window.addEventListener("scroll", controlHeader);
      return () => {
         window.removeEventListener("scroll", controlHeader);
      };
   }, [lastScrollY]);
   return (
      <section
         className={`${
            show ? "top-0" : "top-[-5rem]"
         } w-full flex justify-between items-center py-4 px-8 shadow sticky transition-top duration-300 bg-white`}
      >
         <img src={Logo} alt="logo" className="w-[10rem]" />
         <img src={HamburgerIcon} alt="hamburger icon" className="hidden" />
         <nav className="flex items-center gap-x-6 text-PictonBlue text-lg font-semibold">
            <img src={CloseIcon} alt="close icon" className="hidden" />
            <p
               className="hover:cursor-pointer hover:text-SkyBlue"
               onClick={() => handleScrollTo(homeRef)}
            >
               Home
            </p>
            <p
               className="hover:cursor-pointer hover:text-SkyBlue"
               onClick={() => handleScrollTo(aboutMeRef)}
            >
               About Me
            </p>
            <p
               className="hover:cursor-pointer hover:text-SkyBlue"
               onClick={() => handleScrollTo(myProjectsRef)}
            >
               My Project
            </p>
            <p
               className="hover:cursor-pointer hover:text-SkyBlue"
               onClick={() => handleScrollTo(contactMeRef)}
            >
               Contact Me
            </p>
         </nav>
      </section>
   );
}

export default Header;
