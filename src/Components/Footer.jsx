import LinkedinIcon from "../assets/linkedin-icon.svg";
import GithubIcon from "../assets/github-icon.svg";

function Footer() {
   return (
      <section className="py-8 px-36 flex justify-between bg-AliceBlue">
         <p className="text-xl font-semibold">
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
                  src={LinkedinIcon}
                  alt="linkedin icon"
               />
            </a>
            <a href="https://github.com/Badr-21" target="_blank" rel="noreferrer">
               <img
                  className="w-8 [@media(hover:hover){&:hover}]:filter-icon hover:cursor-pointer"
                  src={GithubIcon}
                  alt="github icon"
               />
            </a>
         </div>
      </section>
   );
}

export default Footer;
