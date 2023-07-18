import { forwardRef } from "react";
const MyProjects = forwardRef(function MyProjects(props, myProjectsRef) {
   return (
      <section ref={myProjectsRef} className="h-[50rem]">
         MyProjects
      </section>
   );
});

export default MyProjects;
