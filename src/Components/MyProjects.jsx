import { forwardRef } from "react";
import PlatinumGymImage from "../assets/Platinum-Gym.png";
import BookTrackerImage from "../assets/Book-Tracker.png";
import JobHuntImage from "../assets/Job-Hunt.png";
import OpenExternal from "../assets/open-external.svg";
import GithubBlackIcon from "../assets/github-black-icon.svg";

const MyProjects = forwardRef(function MyProjects(props, myProjectsRef) {
   return (
      <section
         ref={myProjectsRef}
         className="py-16 w-full bg-AliceBlue flex flex-col gap-y-20 items-center overflow-x-hidden"
      >
         <h2 className=" w-[60rem] text-4xl text-PictonBlue font-semibold self-start lg:px-36 px-8">
            My Projects
         </h2>
         <article className="lg:w-[60rem] lg:h-[26rem] md:w-[40rem] sm:w-[35rem] min-[445px]:w-[25rem] h-[35rem] w-[18rem] border flex lg:flex-row flex-col overflow-hidden p-4 rounded-md shadow bg-white">
            <div className="md:w-[38rem] sm:w-[33rem] min-[445px]:w-[23rem] w-[16rem] border rounded-md overflow-hidden">
               <a href="https://badr-21-platinum-gym.netlify.app/" target="_blank" rel="noreferrer">
                  <img
                     className=" h-[100rem] relative transition transform lg:hover:translate-y-[-76rem] sm:hover:translate-y-[-83rem] hover:translate-y-[-87rem] duration-7000 ease-in-out hover:cursor-pointer rounded-md"
                     src={PlatinumGymImage}
                     alt="Platinum Gym website image"
                  />
               </a>
            </div>
            <div className="lg:w-[25rem] md:w-[38rem] sm:w-[33rem] min-[445px]:w-[23rem] w-[16rem] lg:px-8 px-4 py-4">
               <h3 className="text-PictonBlue font-bold text-center mb-4">Platinum Gym</h3>
               <p className="text-DavysGray font-medium mb-4 max-[445px]:text-sm">
                  Platinum Gym is a workout exercise website. It allows users to search for
                  exercises by typing the exercise name, a body-part, or equipment. Click on one of
                  the exercises, and you will get similar target muscle exercises, similar equipment
                  exercises, and YouTube videos for the clicked exercise. It has over 1000 exercises
                  using data from the ExerciseDB API.
               </p>
               <div className="flex gap-x-4 mb-4 max-[445px]:hidden">
                  <p className="shadow border rounded-md p-1 font-semibold">TypeScript</p>
                  <p className="shadow border rounded-md p-1 font-semibold">React</p>
                  <p className="shadow border rounded-md p-1 font-semibold">Tailwind</p>
               </div>
               <div className="flex items-center gap-x-4">
                  <a
                     className="flex gap-x-2 items-center group"
                     href="https://badr-21-platinum-gym.netlify.app/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <p className="text-DavysGray font-semibold">Live</p>
                     <img
                        className="w-6 group-[@media(hover:hover){&:hover}]:filter-icon hover:cursor-pointer"
                        src={OpenExternal}
                        alt="open external icon"
                     />
                  </a>
                  <a
                     className="flex gap-x-2 items-center group"
                     href="https://github.com/Badr-21"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <p className="text-DavysGray font-semibold">Code</p>
                     <img
                        className="w-6 group-[@media(hover:hover){&:hover}]:filter-icon hover:cursor-pointer"
                        src={GithubBlackIcon}
                        alt="github icon"
                     />
                  </a>
               </div>
            </div>
         </article>
         <article className="lg:w-[60rem] lg:h-[26rem] md:w-[40rem] sm:w-[35rem] min-[445px]:w-[25rem] h-[35rem] w-[18rem] border flex lg:flex-row flex-col overflow-hidden p-4 rounded-md shadow bg-white">
            <div className="md:w-[38rem] sm:w-[33rem] min-[445px]:w-[23rem] w-[16rem] border rounded-md overflow-hidden">
               <a href="https://badr-21-book-tracker.netlify.app/" target="_blank" rel="noreferrer">
                  <img
                     className="w-[60rem] h-[85rem] relative transition transform lg:hover:translate-y-[-63rem] sm:hover:translate-y-[-70rem] hover:translate-y-[-75rem] duration-7000 ease-in-out hover:cursor-pointer rounded-md"
                     src={BookTrackerImage}
                     alt="Book Tracker website image"
                  />
               </a>
            </div>
            <div className="lg:w-[25rem] md:w-[38rem] sm:w-[33rem] min-[445px]:w-[23rem] w-[16rem] lg:px-8 px-4 py-4">
               <h3 className="text-PictonBlue font-bold text-center mb-4">Book Tracker</h3>
               <p className="text-DavysGray font-medium mb-4 max-[445px]:text-sm">
                  Book Tracker is a CRUD app using local storage. With Book Tracker, you can write,
                  edit, read, archive, and delete notes. You can organize your books into five
                  categories: current reading, favorite, to read, have read, and archived. Using the
                  Google Books API, there are countless books that you can search for.
               </p>
               <div className="flex gap-x-4 mb-4">
                  <p className="shadow border rounded-md p-1 font-semibold">React</p>
                  <p className="shadow border rounded-md p-1 font-semibold">SCSS</p>
               </div>
               <div className="flex gap-x-4">
                  <a
                     className="flex gap-x-2 items-center group"
                     href="https://badr-21-book-tracker.netlify.app/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <p className="text-DavysGray font-semibold">Live</p>
                     <img
                        className="w-6 group-[@media(hover:hover){&:hover}]:filter-icon hover:cursor-pointer"
                        src={OpenExternal}
                        alt="open external icon"
                     />
                  </a>
                  <a
                     className="flex gap-x-2 items-center group"
                     href="https://github.com/Badr-21"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <p className="text-DavysGray font-semibold">Code</p>
                     <img
                        className="w-6 group-[@media(hover:hover){&:hover}]:filter-icon hover:cursor-pointer"
                        src={GithubBlackIcon}
                        alt="github icon"
                     />
                  </a>
               </div>
            </div>
         </article>
         <article className="lg:w-[60rem] lg:h-[26rem] md:w-[40rem] sm:w-[35rem] min-[445px]:w-[25rem] h-[35rem] w-[18rem] border flex lg:flex-row flex-col overflow-hidden p-4 rounded-md shadow bg-white">
            <div className="md:w-[38rem] sm:w-[33rem] min-[445px]:w-[23rem] w-[16rem] border rounded-md overflow-hidden">
               <a
                  href="https://badr-21-employment-website.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
               ></a>
               <img
                  className="w-[60rem] h-[80rem] relative transition transform lg:hover:translate-y-[-57rem] md:hover:translate-y-[-63rem] sm:hover:translate-y-[-65rem] min-[445px]:hover:translate-y-[-67rem] hover:translate-y-[-69rem] duration-7000 ease-in-out hover:cursor-pointer rounded-md"
                  src={JobHuntImage}
                  alt="JobHunt Image website image"
               />
            </div>
            <div className="lg:w-[25rem] md:w-[38rem] sm:w-[33rem] min-[445px]:w-[23rem] w-[16rem] lg:px-8 px-4 py-4">
               <h3 className="text-PictonBlue font-bold text-center mb-4">Job Hunt</h3>
               <p className="text-DavysGray font-medium mb-4 max-[445px]:text-sm">
                  JobHunt is an employment website. A job search website using data extracted from
                  The muse api and stored in a JSON file. You can search for the a job using job
                  title or keyword, or you can search for the location using a city, a state, or a
                  country name, you can also use remote instead of any location.
               </p>
               <div className="flex gap-x-4 mb-4">
                  <p className="shadow border rounded-md p-1 font-semibold">React</p>
                  <p className="shadow border rounded-md p-1 font-semibold">Tailwind</p>
               </div>
               <div className="flex gap-x-4">
                  <a
                     className="flex gap-x-2 items-center group"
                     href="https://badr-21-employment-website.netlify.app/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <p className="text-DavysGray font-semibold">Live</p>
                     <img
                        className="w-6 group-[@media(hover:hover){&:hover}]:filter-icon hover:cursor-pointer"
                        src={OpenExternal}
                        alt="open external icon"
                     />
                  </a>
                  <a
                     className="flex gap-x-2 items-center group"
                     href="https://github.com/Badr-21"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <p className="text-DavysGray font-semibold">Code</p>
                     <img
                        className="w-6 group-[@media(hover:hover){&:hover}]:filter-icon hover:cursor-pointer"
                        src={GithubBlackIcon}
                        alt="github icon"
                     />
                  </a>
               </div>
            </div>
         </article>
      </section>
   );
});

export default MyProjects;
