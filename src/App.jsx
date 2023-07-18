import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Header from "./Components/Header";
import Home from "./Components/Home";
import MyProjects from "./Components/MyProjects";
import arrowUpIcon from "./assets/arrow-up.svg";
import { useRef, useState } from "react";

function App() {
   const [show, setShow] = useState(true);

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
         <Header
            homeRef={homeRef}
            aboutMeRef={aboutMeRef}
            myProjectsRef={myProjectsRef}
            contactMeRef={contactMeRef}
            handleScrollTo={handleScrollTo}
            show={show}
            setShow={setShow}
         />
         <main>
            <Home ref={homeRef} />
            <AboutMe ref={aboutMeRef} />
            <MyProjects ref={myProjectsRef} />
            <ContactMe ref={contactMeRef} />
            <img
               src={arrowUpIcon}
               alt="arrow up icon"
               onClick={scrollToTop}
               className={`${
                  show ? "right-[2.5rem]" : "right-[-2.5rem]"
               } w-10 fixed bottom-4 hover:cursor-pointer hover:scale-110`}
            />
         </main>
      </>
   );
}

export default App;
