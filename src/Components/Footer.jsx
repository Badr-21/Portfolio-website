import LinkedinWhiteIcon from "../assets/linkedin-white-icon.svg";
import GithubWhiteIcon from "../assets/github-white-icon.svg";

function Footer() {
   return (
      <section className="py-12 px-36 flex justify-between bg-DavysGray">
         <p className="text-xl font-semibold text-white">
            Designed & build by Badreddine Boudaoud &copy; 2023
         </p>
         <div className="flex gap-x-4">
            <a
               href="https://www.linkedin.com/in/badreddine-boudaoud-abb61b282/"
               target="_blank"
               rel="noreferrer"
            >
               <img
                  className="w-8 [@media(hover:hover){&:hover}]:filter-icon hover:cursor-pointer"
                  src={LinkedinWhiteIcon}
                  alt="linkedin icon"
               />
            </a>
            <a href="https://github.com/Badr-21" target="_blank" rel="noreferrer">
               <img
                  className="w-8 [@media(hover:hover){&:hover}]:filter-icon hover:cursor-pointer"
                  src={GithubWhiteIcon}
                  alt="github icon"
               />
            </a>
         </div>
      </section>
   );
}

export default Footer;
