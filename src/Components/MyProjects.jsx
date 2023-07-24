import { forwardRef } from "react";
import PlatinumGymImage from "../assets/Platinum-Gym.png";
import BookTrackerImage from "../assets/Book-Tracker.png";
import JobHuntImage from "../assets/Job-Hunt.png";
import OpenExternal from "../assets/open-external.svg";
import GithubIcon from "../assets/github-icon.svg";

const MyProjects = forwardRef(function MyProjects(props, myProjectsRef) {
   return (
      <section
         ref={myProjectsRef}
         className="py-8 w-full bg-AliceBlue flex flex-col gap-y-16 items-center"
      >
         <h2 className=" w-[60rem] text-4xl text-PictonBlue font-semibold mb-8">My Projects</h2>
         <article className="w-[60rem] h-[22.5rem] border flex overflow-hidden p-4 rounded-md shadow bg-white">
            <div className="w-[35rem] border rounded-md overflow-hidden">
               <a href="https://badr-21-platinum-gym.netlify.app/" target="_blank" rel="noreferrer">
                  <img
                     className=" h-[100rem] relative transition transform hover:translate-y-[-77.5rem] duration-7000 ease-in-out hover:cursor-pointer rounded-md"
                     src={PlatinumGymImage}
                     alt="Platinum Gym website image"
                  />
               </a>
            </div>
            <div className="w-[25rem] px-8 py-4">
               <h3 className="text-PictonBlue font-bold text-center mb-4">Platinum Gym</h3>
               <p className="text-DavysGray font-semibold mb-4">
                  Platinum Gym is a workout exercise website. It allows users to search for
                  exercises by typing the exercise name, a body-part, or equipment. Click on one of
                  the exercises, and you will get similar target muscle exercises, similar equipment
                  exercises, and YouTube videos for the clicked exercise. It has over 1000 exercises
                  using data from the ExerciseDB API.
               </p>
               <div className="flex gap-x-4">
                  <a
                     className="flex gap-x-2 items-center group"
                     href="https://badr-21-platinum-gym.netlify.app/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <p className="text-DavysGray font-semibold mb-4">Live</p>
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
                     <p className="text-DavysGray font-semibold mb-4">Code</p>
                     <img
                        className="w-6 group-[@media(hover:hover){&:hover}]:filter-icon hover:cursor-pointer"
                        src={GithubIcon}
                        alt="github icon"
                     />
                  </a>
               </div>
            </div>
         </article>
         <article className="w-[60rem] h-[22.5rem] border flex flex-row-reverse overflow-hidden p-4 rounded-md shadow bg-white">
            <div className="w-[35rem] border rounded-md overflow-hidden">
               <a href="https://badr-21-book-tracker.netlify.app/" target="_blank" rel="noreferrer">
                  <img
                     className="w-[60rem] h-[100rem] relative transition transform hover:translate-y-[-80.5rem] duration-7000 ease-in-out hover:cursor-pointer rounded-md"
                     src={BookTrackerImage}
                     alt="Book Tracker website image"
                  />
               </a>
            </div>
            <div className="w-[25rem] px-8 py-4">
               <h3 className="text-PictonBlue font-bold text-center mb-4">Book Tracker</h3>
               <p className="text-DavysGray font-semibold mb-4">
                  Book Tracker is a CRUD app using local storage. With Book Tracker, you can write,
                  edit, read, archive, and delete notes. You can organize your books into five
                  categories: current reading, favorite, to read, have read, and archives. Using the
                  Google Books API, there are countless books that you can search for.
               </p>
               <div className="flex gap-x-4">
                  <a
                     className="flex gap-x-2 items-center group"
                     href="https://badr-21-book-tracker.netlify.app/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <p className="text-DavysGray font-semibold mb-4">Live</p>
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
                     <p className="text-DavysGray font-semibold mb-4">Code</p>
                     <img
                        className="w-6 group-[@media(hover:hover){&:hover}]:filter-icon hover:cursor-pointer"
                        src={GithubIcon}
                        alt="github icon"
                     />
                  </a>
               </div>
            </div>
         </article>
         <article className="w-[60rem] h-[22.5rem] border flex overflow-hidden p-4 rounded-md shadow bg-white">
            <div className="w-[35rem] border rounded-md overflow-hidden">
               <a
                  href="https://badr-21-employment-website.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
               ></a>
               <img
                  className="w-[60rem] h-[100rem] relative transition transform hover:translate-y-[-78.5rem] duration-7000 ease-in-out hover:cursor-pointer rounded-md"
                  src={JobHuntImage}
                  alt="JobHunt Image website image"
               />
            </div>
            <div className="w-[25rem] px-8 py-4">
               <h3 className="text-PictonBlue font-bold text-center mb-4">Job Hunt</h3>
               <p className="text-DavysGray font-semibold mb-4">
                  JobHunt is an employment website. A job search website using data extracted from
                  The muse api and stored in a JSON file. You can search for the job using job title
                  or keyword, or you can search for the location using a city, a state, or a country
                  name, you can also use remote instead of any location.
               </p>
               <div className="flex gap-x-4">
                  <a
                     className="flex gap-x-2 items-center group"
                     href="https://badr-21-employment-website.netlify.app/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <p className="text-DavysGray font-semibold mb-4">Live</p>
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
                     <p className="text-DavysGray font-semibold mb-4">Code</p>
                     <img
                        className="w-6 group-[@media(hover:hover){&:hover}]:filter-icon hover:cursor-pointer"
                        src={GithubIcon}
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
