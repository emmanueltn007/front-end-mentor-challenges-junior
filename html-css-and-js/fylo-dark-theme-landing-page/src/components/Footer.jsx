import socialIcons from "../utilities/footerItems";

function Footer() {
  return (
    <footer className="py-8 px-8 md:px-12 md:py-16">
      <img src="/images/logo.svg" alt="Fylo logo" />
      <div className="text-[hsl(0,0%,100%)] grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex">
            <img
              className="h-6"
              src="/images/icon-location.svg"
              alt="location icon"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              quod obcaecati eligendi ut excepturi nostrum aperiam, aliquam
              dolorum aspernatur soluta dolorem quo in labore reiciendis beatae
              odio? Voluptate, similique expedita.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="flex items-center gap-4">
              <img
                className="h-4"
                src="/images/icon-phone.svg"
                alt="phone icon"
              />
              +1-543-123-4567
            </span>
            <span className="flex items-center gap-4">
              <img
                className="h-4"
                src="/images/icon-email.svg"
                alt="email icons"
              />
              example@fylo.com
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-around gap-8 md:flex-row">
          <div className="flex flex-col md:flex-row gap-8">
            <ul className="flex flex-col gap-2">
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div className="text-white flex gap-4">
            {socialIcons.map(({ social, icon_path }) => {
              return (
                <svg
                  className="w-8 h-8 text-white cursor-pointer hover:text-[hsl(176,68%,64%)] transition duration-300 ease-in-out"
                  key={social}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d={icon_path} fill="currentColor" />
                </svg>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
