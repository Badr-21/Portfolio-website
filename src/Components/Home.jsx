import { forwardRef, useState, useEffect } from "react";
import DownlaodIcon from "../assets/download-icon.svg";
import LinkedinBlackIcon from "../assets/linkedin-black-icon.svg";
import GithubBlackIcon from "../assets/github-black-icon.svg";

const Home = forwardRef(function Home(props, homeRef) {
   const words = [" My name is Badreddine Boudaoud   ", " I'm a Frontend Developer   "];
   const [i, setI] = useState(0);
   const [j, setJ] = useState(0);
   const [currentWord, setCurrentWord] = useState(words[0]);
   const [isDeleting, setIsDeleting] = useState(false);

   useEffect(() => {
      const type = () => {
         setCurrentWord(words[i]);

         if (isDeleting) {
            setJ((prevJ) => prevJ - 1);

            if (j === 0) {
               setIsDeleting(false);
               setI((prevI) => (prevI + 1) % words.length);
            }
         } else {
            setJ((prevJ) => prevJ + 1);

            if (j === currentWord.length) {
               setIsDeleting(true);
            }
         }
      };

      let typingInterval;
      if (isDeleting) {
         typingInterval = setTimeout(type, 25);
      } else {
         typingInterval = setTimeout(type, 100);
      }

      return () => clearTimeout(typingInterval);
   }, [i, j, isDeleting, currentWord]);
   return (
      <section
         ref={homeRef}
         className="lg:px-36 px-8 py-40 bg-AliceBlue text-RichBlack flex flex-col"
      >
         <p className="text-xl font-semibold mb-4">Hi, </p>
         <h1 id="typewriter" className="h-[10rem] sm:text-5xl text-4xl font-bold text-PictonBlue">
            {currentWord.substring(0, j)}
         </h1>
         <div className="flex items-center gap-x-8 gap-y-4 flex-wrap">
            <button className="w-fit flex items-center gap-x-4 relative z-10 p-2 bg-transparent text-left border-2 border-DavysGray rounded-md  transition-color before:absolute before:top-0 before:left-0 before:-z-30 before:h-full before:w-full before:rounded-md before:origin-top-left before:scale-x-0 before:bg-PictonBlue before:transition-transform before:duration-300 before:content-[''] before:text-center before:[@media(hover:hover){&:hover}]:scale-x-100 [@media(hover:hover){&:hover}]:border-transparent">
               <a
                  className="text-RichBlack font-semibold text-lg"
                  href="../../public/Resume.pdf"
                  download
               >
                  Download resume{" "}
               </a>
               <img className="w-6" src={DownlaodIcon} alt="downlaod icon" />
            </button>
            <a
               href="https://www.linkedin.com/in/badreddine-boudaoud/"
               target="_blank"
               rel="noreferrer"
            >
               <img
                  className="w-10 [@media(hover:hover){&:hover}]:filter-icon hover:cursor-pointer"
                  src={LinkedinBlackIcon}
                  alt="linkedin icon"
               />
            </a>
            <a href="https://github.com/Badr-21" target="_blank" rel="noreferrer">
               <img
                  className="w-10 [@media(hover:hover){&:hover}]:filter-icon hover:cursor-pointer"
                  src={GithubBlackIcon}
                  alt="github icon"
               />
            </a>
         </div>
      </section>
   );
});

export default Home;
