import { useEffect, useRef } from "react";

function ScrollProgress() {
   const scrollerRef = useRef();
   const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   useEffect(() => {
      window.addEventListener("scroll", () => {
         scrollerRef.current.style.width = `${
            (document.documentElement.scrollTop * 100) / height
         }%`;
      });
      return () => {
         window.removeEventListener("scroll", () => {
            scrollerRef.current.style.width = `${
               (document.documentElement.scrollTop * 100) / height
            }%`;
         });
      };
   }, [height]);
   return <div ref={scrollerRef} className="bg-PictonBlue h-1 fixed z-20"></div>;
}

export default ScrollProgress;
