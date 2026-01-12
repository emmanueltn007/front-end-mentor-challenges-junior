import socialIcons from "../utilities/socialsIcons";
import items from "../utilities/footerListItems"
import contacts from "../utilities/contactInfo";

function Footer() {
  const hoverStyle = "w-fit relative after:absolute after:content-[''] after:-bottom-1 after:left-0 after:w-0 after:bg-[hsl(0,0%,100%)] " +
                      "after:h-0.5 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out cursor-pointer " +
                      "hover:text-[hsl(0,0%,100%)] transition duration-300 ease-in-out";

  return (
    <footer className="flex flex-col gap-8 py-8 px-8 md:px-12 md:py-16 text-xl md:text-md">
      <img className="w-64 md:w-32" src="/images/logo.svg" alt="Fylo logo" />
      <div className="text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex gap-4">
            <img
              className="h-4 translate-y-1/2"
              src="/images/icon-location.svg"
              alt="location icon"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              quod obcaecati eligendi ut excepturi nostrum aperiam, aliquam.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {contacts.map((contact, contactIndex) => {
              return (
                <span className="flex items-center gap-4" key={contactIndex}>
                  <img className="h-4" src={contact.icon} alt={contact.alt} />
                  {contact.contact}
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-around gap-8 md:flex-row">
          <div className="flex flex-col md:flex-row gap-8">
            <ul className="flex flex-col gap-2">
              {items.firstList.map((item, index) => {
                return (
                  <li className={hoverStyle} key={index}>{item}</li>
                );
              })}
            </ul>
            <ul className="flex flex-col gap-2">
              {items.secontList.map((item, index) => {
                return (
                  <li className={hoverStyle} key={index}>{item}</li>
                );
              })}
            </ul>
          </div>

          <div className="text-white flex gap-4 max-md:mx-auto">
            {socialIcons.map(({ social, icon_path }) => {
              return (
                <div key={social} 
                    className="border border-[hsl(0,0%,100%)] h-9 w-9 rounded-full flex items-center justify-center text-[hsl(0,0%,100%)]
                                cursor-pointer hover:text-[hsl(176,68%,64%)] hover:border-[hsl(176,68%,64%)] transition-all duration-300 ease-in-out"
                >
                  <svg
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d={icon_path} fill="currentColor" />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;