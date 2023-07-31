import { forwardRef } from "react";
import HTMLIcon from "../assets/html-icon.svg";
import CSSIcon from "../assets/css-icon.svg";
import JavaScriptIcon from "../assets/javascript-icon.svg";
import SCSSIcon from "../assets/scss-icon.svg";
import ReactJsIcon from "../assets/reactjs-icon.svg";
import TailwindIcon from "../assets/tailwind-icon.svg";
import TypeScriptIcon from "../assets/typescript-icon.svg";

const AboutMe = forwardRef(function AboutMe(props, aboutMeRef) {
   return (
      <section ref={aboutMeRef} className="py-16 lg:px-36 px-8 bg-white">
         <h2 className="text-4xl text-PictonBlue font-semibold mb-12">About Me</h2>
         <p className="text-DavysGray font-medium mb-10 leading-8">
            My name is Badreddine Boudaoud. I&#39;m a frontend developer with a master&#39;s degree
            in Electronics of Embedded Systems. In 2021, I embarked on my journey to learn frontend
            development, and it has now become my true passion. With a wealth of expertise in HTML,
            CSS, JavaScript, SCSS, React, Tailwind, and TypeScript, I am dedicated to delivering
            top-notch quality in all my projects. Meticulously crafting visually captivating and
            responsive websites is what I do best, with an unwavering focus on the finest details,
            ensuring pixel-perfect designs and flawless user experiences. Let&#39;s collaborate and
            turn your vision into reality, infusing every line of code with creativity and precision
            to create extraordinary digital experiences together!
         </p>
         <div className="lg:flex items-center gap-x-6">
            <h3 className="text-2xl font-semibold text-DavysGray mb-4">Tech Stack</h3>
            <div className="flex flex-wrap items-center gap-x-6">
               <div className="flex flex-col items-center">
                  <img className="w-10" src={HTMLIcon} alt="HTML icon" />
                  <p className="text-DavysGray font-semibold">HTML</p>
               </div>
               <div className="flex flex-col items-center">
                  <img className="w-10" src={CSSIcon} alt="CSS icon" />
                  <p className="text-DavysGray font-semibold">CSS</p>
               </div>
               <div className="flex flex-col items-center">
                  <img className="w-10" src={JavaScriptIcon} alt="JavaScript icon" />
                  <p className="text-DavysGray font-semibold">JavaScript</p>
               </div>
               <div className="flex flex-col items-center">
                  <img className="w-10" src={SCSSIcon} alt="SCSS icon" />
                  <p className="text-DavysGray font-semibold">SCSS</p>
               </div>
               <div className="flex flex-col items-center">
                  <img className="w-10" src={ReactJsIcon} alt="React Js icon" />
                  <p className="text-DavysGray font-semibold">React</p>
               </div>
               <div className="flex flex-col items-center">
                  <img className="w-10" src={TailwindIcon} alt="Tailwind icon" />
                  <p className="text-DavysGray font-semibold">Tailwind</p>
               </div>
               <div className="flex flex-col items-center">
                  <img className="w-10" src={TypeScriptIcon} alt="TypeScript icon" />
                  <p className="text-DavysGray font-semibold">TypeScript</p>
               </div>
            </div>
         </div>
      </section>
   );
});

export default AboutMe;
