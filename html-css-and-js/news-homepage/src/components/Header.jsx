import { useState, useEffect } from "react";
import NavItems from "./nav-items-reuse/NavItems";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleMenuOpen = () => setIsOpen(true);
  return (
    <header className="flex justify-between items-center">
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div>
        <img className="w-12" src="/assets/images/logo.svg" alt="logo image" />
      </div>

      {/* MOBILE NAV */}
      <nav className="md:hidden z-50">
        <button
          onClick={handleMenuOpen}
          className="cursor-pointer flex items-center"
        >
          <img src="/assets/images/icon-menu.svg" alt="menu icon" />
        </button>
        <NavItems
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          listClass={`flex flex-col gap-4 py-24 px-4 fixed w-3/4 h-screen bg-white top-0 right-0 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          itemClass="font-semibold cursor-pointer hover:text-[hsl(5,85%,63%)] transition-all duration-300 ease-in-out"
        />
      </nav>

      {/* DESKTOP NAV */}
      <nav className="max-md:hidden">
        <NavItems
          listClass="flex gap-8"
          itemClass="cursor-pointer hover:text-[hsl(5,85%,63%)] transition duration-300 ease-in-out relative after:content-[''] 
                    after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[hsl(5,85%,63%)] hover:after:w-full 
                    after:transition-all after:duration-300 after:ease-in-out"
        />
      </nav>
    </header>
  );
}

export default Header;
