import NavLinks from "./header-and-footer-components/NavLinks"
import socials from "../utilities/socialLinks";

function Footer () {

  const hoverUnderlineAnimation = "w-fit relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[hsl(0,0%,100%)] hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"

  return (
    <footer className="bg-[hsl(0,0%,0%)] text-[hsl(0,0%,100%)] font-semibold text-center flex flex-col md:flex-row items-center md:justify-between md:items-center max-md:gap-8 px-8 md:px-24 py-16 md:py-12">
      <div className="flex flex-col gap-8 md:gap-4">
        <img className="h-8 w-48" src="/images/logo.svg" alt="loopstudios logo" />
        <NavLinks 
          listClass="flex flex-col items-center md:flex-row gap-4" 
          itemsClass={hoverUnderlineAnimation}
        />
      </div>
      <div className="flex flex-col gap-4">
        <ul className="flex items-center gap-4 max-md:mx-auto md:ml-auto">
          {socials.map((social) => {
            return (
              <li key={social}
                className={hoverUnderlineAnimation}
              >
                <a href="#">
                  <img src={social} alt="social icon" />
                </a>
              </li>
            );
          })}
        </ul>
        <p className="text-gray-500">
          © 2021 Loopstudios. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer