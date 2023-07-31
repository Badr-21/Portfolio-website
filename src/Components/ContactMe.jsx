import { forwardRef } from "react";
import EmailIcon from "../assets/email-icon.svg";

const ContactMe = forwardRef(function ContactMe(props, contactMeRef) {
   return (
      <section ref={contactMeRef} className="py-16 lg:px-36 px-8 bg-white">
         <h2 className="text-4xl text-PictonBlue font-semibold mb-12">Contact Me</h2>
         <p className="text-DavysGray font-medium mb-10">
            If you&#39;re interested in hiring a passionate frontend developer, I&#39;m always open
            to exciting opportunities and engaging projects! Don&#39;t hesitate to reach out if you
            have any other requests or questions. I&#39;m eager to collaborate and bring your ideas
            to life. Feel free to contact me anytime.
         </p>
         <button>
            <a
               className="flex items-center gap-x-4 relative z-20 p-2 bg-transparent text-left border-2 border-DavysGray rounded-md transition-color before:absolute before:top-0 before:left-0 before:-z-30 before:h-full before:w-full before:rounded-md before:origin-top-left before:scale-x-0 before:bg-PictonBlue before:transition-transform before:duration-300 before:content-[''] before:text-center before:hover:scale-x-100 [@media(hover:hover){&:hover}]:text-white [@media(hover:hover){&:hover}]:border-transparent"
               href="mailto:badreddine.boudaoud.dev@gmail.com"
            >
               <p className="text-RichBlack text-lg font-medium ">Send an Email</p>
               <img className="w-6" src={EmailIcon} alt="email icon" />
            </a>
         </button>
      </section>
   );
});

export default ContactMe;
