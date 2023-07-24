import { forwardRef } from "react";
import PlatinumGymImage from "../assets/Platinum-Gym.png";
import BookTrackerImage from "../assets/Book-Tracker.png";
import JobHuntImage from "../assets/Job-Hunt.png";

const MyProjects = forwardRef(function MyProjects(props, myProjectsRef) {
   return (
      <section
         ref={myProjectsRef}
         className="py-8 w-full bg-AliceBlue flex flex-col gap-y-16 items-center"
      >
         <h2 className="text-4xl text-PictonBlue font-semibold mb-8">My Projects</h2>
         <article className="w-[60rem] h-[22.5rem] border flex overflow-hidden p-4 rounded-md shadow bg-white">
            <div className="w-[60rem] border rounded-md overflow-hidden">
               <img
                  className=" h-[100rem] relative transition transform hover:translate-y-[-77.5rem] duration-7000 ease-in-out hover:cursor-pointer rounded-md"
                  src={PlatinumGymImage}
                  alt="Platinum Gym website image"
               />
            </div>
            <div>
               <h3>Platinum Gym</h3>
               <p>
                  Platinum Gym is a workout exercise website. It&#39;s my third portfolio project.
                  It has +1000 exercises using data from ExerciseDB api.
               </p>
            </div>
         </article>
         <article className="w-[60rem] h-[22.5rem] border flex flex-row-reverse overflow-hidden p-4 rounded-md shadow bg-white">
            <div className="w-[60rem] border rounded-md overflow-hidden">
               <img
                  className="w-[60rem] h-[100rem] relative transition transform hover:translate-y-[-80.5rem] duration-7000 ease-in-out hover:cursor-pointer rounded-md"
                  src={BookTrackerImage}
                  alt="Book Tracker website image"
               />
            </div>
            <div>
               <h3>Book Tracker</h3>
               <p>
                  Platinum Gym is a workout exercise website. It&#39;s my third portfolio project.
                  It has +1000 exercises using data from ExerciseDB api.
               </p>
            </div>
         </article>
         <article className="w-[60rem] h-[22.5rem] border flex overflow-hidden p-4 rounded-md shadow bg-white">
            <div className="w-[60rem] border rounded-md overflow-hidden">
               <img
                  className="w-[60rem] h-[100rem] relative transition transform hover:translate-y-[-78.5rem] duration-7000 ease-in-out hover:cursor-pointer rounded-md"
                  src={JobHuntImage}
                  alt="JobHunt Image website image"
               />
            </div>
            <div>
               <h3>Job Hunt</h3>
               <p>
                  Platinum Gym is a workout exercise website. It&#39;s my third portfolio project.
                  It has +1000 exercises using data from ExerciseDB api.
               </p>
            </div>
         </article>
      </section>
   );
});

export default MyProjects;
