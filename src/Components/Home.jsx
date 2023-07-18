import { forwardRef } from "react";

const Home = forwardRef(function Home(props, homeRef) {
   return (
      <section ref={homeRef} className="h-[50rem]">
         Home
      </section>
   );
});

export default Home;
