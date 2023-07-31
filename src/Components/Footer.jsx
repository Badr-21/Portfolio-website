import LinkedinWhiteIcon from "../assets/linkedin-white-icon.svg";
import GithubWhiteIcon from "../assets/github-white-icon.svg";

function Footer() {
   return (
      <section className="py-8 lg:px-36 px-8 flex flex-col items-center gap-y-12 bg-DavysGray">
         <div className="w-full flex flex-col-reverse justify-between items-center sm:flex-row gap-y-4">
            <p className="text-white font-medium">badreddine.boudaoud.dev@gmail.com</p>
            <div className="flex gap-x-4 flex-shrink-0">
               <a
                  href="https://www.linkedin.com/in/badreddine-boudaoud/"
                  target="_blank"
                  rel="noreferrer"
               >
                  <img
                     className="w-6 [@media(hover:hover){&:hover}]:filter-icon hover:cursor-pointer"
                     src={LinkedinWhiteIcon}
                     alt="linkedin icon"
                  />
               </a>
               <a href="https://github.com/Badr-21" target="_blank" rel="noreferrer">
                  <img
                     className="w-6 [@media(hover:hover){&:hover}]:filter-icon hover:cursor-pointer"
                     src={GithubWhiteIcon}
                     alt="github icon"
                  />
               </a>
            </div>
         </div>
         <p className="text-lg font-semibold text-white">
            Designed & build by Badreddine Boudaoud &copy; 2023
         </p>
      </section>
   );
}

export default Footer;
