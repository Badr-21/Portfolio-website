import { forwardRef } from "react";

const ContactMe = forwardRef(function ContactMe(props, contactMeRef) {
   return (
      <section ref={contactMeRef} className="py-8 px-36">
         <h2 className="text-4xl text-PictonBlue font-semibold mb-8">Contact Me</h2>
         <p className="text-DavysGray font-medium">
            If you&#39;re interested in hiring a passionate frontend developer, I&#39;m always open
            to exciting opportunities and engaging projects! Don&#39;t hesitate to reach out if you
            have any other requests or questions. I&#39;m eager to collaborate and bring your ideas
            to life. Feel free to contact me anytime.
         </p>
         <button>
            <a
               href="mailto:badreddine.boudaoud.dev@gmail.com"
               // className="bg-gradient-to-r from-PictonBlue to-PictonBlue bg-[length:10%_100%] hover:bg-[length:100%_100%] bg-no-repeat transition duration-300 hover:duration-300 "
               className="m-16 relative group"
            >
               <p>Send an Email</p>
               <span className="absolute left-0 -bottom-1 w-full h-2 bg-red-400 -z-10 group-hover:h-full group-hover:transition-all"></span>
            </a>
         </button>
      </section>
   );
});

export default ContactMe;
