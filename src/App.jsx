import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import MyProjects from "./Components/MyProjects";
import ScrollProgress from "./Components/ScrollProgress";
import arrowUpIcon from "./assets/arrow-up.svg";
import { useRef, useState } from "react";

function App() {
   const [showNavBar, setShowNavBar] = useState(true);

   const homeRef = useRef();
   const aboutMeRef = useRef();
   const myProjectsRef = useRef();
   const contactMeRef = useRef();
   const handleScrollTo = (ref) => {
      ref.current.scrollIntoView({
         behavior: "smooth",
      });
   };

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };
   return (
      <>
         <ScrollProgress />
         <Header
            homeRef={homeRef}
            aboutMeRef={aboutMeRef}
            myProjectsRef={myProjectsRef}
            contactMeRef={contactMeRef}
            handleScrollTo={handleScrollTo}
            showNavBar={showNavBar}
            setShowNavBar={setShowNavBar}
         />
         <main>
            <Home ref={homeRef} />
            <AboutMe ref={aboutMeRef} />
            <MyProjects ref={myProjectsRef} />
            <ContactMe ref={contactMeRef} />
            <Footer />
            <img
               src={arrowUpIcon}
               alt="arrow up icon"
               onClick={scrollToTop}
               className={`${
                  showNavBar ? "right-[2.5rem]" : "right-[-2.5rem]"
               } w-10 fixed bottom-4 hover:cursor-pointer hover:scale-110`}
            />
         </main>
      </>
   );
}

export default App;
