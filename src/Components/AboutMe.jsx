import { forwardRef } from "react";
const AboutMe = forwardRef(function AboutMe(props, aboutMeRef) {
   return (
      <section ref={aboutMeRef} className="h-[50rem]">
         AboutMe
      </section>
   );
});

export default AboutMe;
