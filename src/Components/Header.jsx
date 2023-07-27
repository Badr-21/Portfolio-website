/* eslint-disable react/prop-types */
import Logo from "../assets/logo.svg";
import HamburgerIcon from "../assets/hamburger-icon.svg";
import CloseIcon from "../assets/close-icon.svg";
import { useEffect, useState, useRef } from "react";

function Header({
   homeRef,
   aboutMeRef,
   myProjectsRef,
   contactMeRef,
   handleScrollTo,
   setShowNavBar,
   showNavBar,
}) {
   const [lastScrollY, setLastScrollY] = useState(0);
   const [showSideBar, setShowSideBar] = useState(false);
   const [responsiveHeader, setResponsiveHeader] = useState(false);
   const navRef = useRef(null);

   const handleReload = () => {
      window.location.reload();
   };

   const controlHeader = () => {
      if (!showSideBar) {
         if (window.scrollY > lastScrollY) {
            setShowNavBar(false);
         } else {
            setShowNavBar(true);
         }
         setLastScrollY(window.scrollY);
      } else {
         if (window.scrollY > lastScrollY) {
            setShowNavBar(true);
         } else {
            setShowNavBar(true);
         }
         setLastScrollY(window.scrollY);
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", controlHeader);
      return () => {
         window.removeEventListener("scroll", controlHeader);
      };
   }, [lastScrollY]);

   const handleSideBar = () => {
      setShowSideBar(!showSideBar);
   };

   useEffect(() => {
      const handleResponsiveHeader = () => {
         if (window.innerWidth < 640) {
            setResponsiveHeader(true);
         } else {
            setResponsiveHeader(false);
         }
      };
      handleResponsiveHeader();
      window.addEventListener("resize", handleResponsiveHeader);
      return () => window.removeEventListener("rezise", handleResponsiveHeader);
   }, []);

   return (
      <section
         className={`${
            showNavBar ? "top-0" : "top-[-5rem]"
         }  w-full flex justify-between items-center py-6 px-8 shadow sticky transition-top duration-300 bg-white z-10`}
      >
         <img
            src={HamburgerIcon}
            alt="hamburger icon"
            className={`${responsiveHeader ? "" : "hidden"} w-8 hover:cursor-pointer`}
            onClick={handleSideBar}
         />
         <img
            src={Logo}
            alt="logo"
            className="w-[10rem] hover:cursor-pointer"
            onClick={handleReload}
         />
         <nav
            ref={navRef}
            className={`${
               showSideBar ? "left-[0]" : "left-[-100%]"
            } w-full sm:w-fit h-screen sm:h-auto p-8 sm:p-0 transition-left absolute top-0 flex flex-col items-center gap-y-8 duration-300 sm:static sm:shadow-none bg-white`}
         >
            <img
               src={CloseIcon}
               alt="close icon"
               className={`${responsiveHeader ? "" : "hidden"} w-8 hover:cursor-pointer self-start`}
               onClick={handleSideBar}
            />
            <ul className="flex text-lg gap-x-6 text-PictonBlue font-semibold sm:flex-row flex-col sm:gap-y-0 gap-y-16">
               <p
                  className="hover:cursor-pointer [@media(hover:hover){&:hover}]:text-SkyBlue"
                  onClick={() => {
                     handleScrollTo(homeRef), handleSideBar();
                  }}
               >
                  Home
               </p>
               <p
                  className="hover:cursor-pointer hover:text-SkyBlue"
                  onClick={() => {
                     handleScrollTo(aboutMeRef), handleSideBar();
                  }}
               >
                  About Me
               </p>
               <p
                  className="hover:cursor-pointer hover:text-SkyBlue"
                  onClick={() => {
                     handleScrollTo(myProjectsRef), handleSideBar();
                  }}
               >
                  My Project
               </p>
               <p
                  className="hover:cursor-pointer hover:text-SkyBlue"
                  onClick={() => {
                     handleScrollTo(contactMeRef), handleSideBar();
                  }}
               >
                  Contact Me
               </p>
            </ul>
         </nav>
      </section>
   );
}

export default Header;
