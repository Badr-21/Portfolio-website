import { forwardRef } from "react";

const Home = forwardRef(function Home(props, homeRef) {
   return (
      <section
         ref={homeRef}
         className="flex justify-center p-8 flex-wrap bg-AliceBlue text-RichBlack"
      >
         <p className="text-6xl font-semibold">Hi, I'm Badreddine Boudaoud.</p>
         <h1 className="text-7xl font-bold text-PictonBlue">A Frontend developer</h1>
      </section>
   );
});

export default Home;
