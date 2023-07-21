import { forwardRef } from "react";
const AboutMe = forwardRef(function AboutMe(props, aboutMeRef) {
   return (
      <section ref={aboutMeRef} className="p-8 bg-white">
         <h2 className="text-4xl text-PictonBlue font-semibold">About Me</h2>
         <p className="text-DavysGray">
            I'm a frontend developer with a master's degree in Electronics of Embedded Systems. In
            2021, I embarked on my journey to learn frontend development, and it has now become my
            true passion. With a wealth of expertise in HTML, CSS, JavaScript, SCSS, Tailwind, and
            TypeScript, I am dedicated to delivering top-notch quality in all my projects.
            Meticulously crafting visually captivating and responsive websites is what I do best,
            with an unwavering focus on the finest details, ensuring pixel-perfect designs and
            flawless user experiences. Let's collaborate and turn your vision into reality, infusing
            every line of code with creativity and precision to create extraordinary digital
            experiences together!
         </p>
      </section>
   );
});

export default AboutMe;
