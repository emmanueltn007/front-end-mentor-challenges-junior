import { useState, useEffect } from "react";
import MobileNav from "./header-components/MobileNav";
import NavItems from "./header-components/NavItems";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    }
  }, [isOpen])

  return (
    <header className="flex items-center justify-between relative text-[hsl(0,0%,87%)]">
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsOpen(false)}></div>
      )}
      <div className="cursor-pointer flex items-center md:gap-16">
        <img className="h-8" src="/images/logo.svg" alt="blogr logo" />

        {/* DESKTOP NAV */}
        <NavItems
          openItem={openItem}
          setOpenItem={setOpenItem}
          container="max-md:hidden"
          dropdownMenu="absolute top-8 bg-white py-4 pl-4 pr-8 rounded-md shadow-md shadow-gray-500 text-[hsl(208,49%,24%)] flex flex-col 
                        gap-4 items-start"
          activeColor="text-white"
          notActiveColor="text-gray-300"
          arrowActive="text-white"
          arrowNotActive="text-gray-300"
          labelClass="font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:bg-white after:w-0 after:h-0.5 hover:after:w-full
                      after:transition-all after:duration-300 after:ease-in-out hover:text-white"
        />
      </div>

      {/* MOBILE NAV */}
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen}>
        <NavItems
          isOpen={isOpen}
          openItem={openItem}
          setOpenItem={setOpenItem}
          container="font-semibold absolute p-4 bg-white shadow-md shadow-gray-500 rounded-md left-0 right-0 top-16 flex flex-col items-center"
          dropdownMenu="bg-gray-300 rounded-md py-4 mt-4 text-[hsl(208,49%,24%)]"
          labelContainer="flex ml-auto mr-auto"
          containerAll="w-full"
          activeColor="text-gray-500"
          notActiveColor="text-[hsl(208,49%,24%)]"
          arrowActive="text-red-500"
          arrowNotActive="text-red-700"
        />
      </MobileNav>

      <div className="max-md:hidden flex gap-4 font-semibold">
        <button className="cursor-pointer px-6 py-2 rounded-3xl text-white border border-transparent hover:border-white transition-all duration-150 ease-in-out">
          Login
        </button>
        <button
          className="cursor-pointer text-[hsl(356,100%,66%)] bg-white py-2 px-6 rounded-3xl
                            hover:text-white hover:bg-[rgba(168,168,168,0.5)] hover:backdrop-blur-2xl transition-all duration-150 ease-in-out"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
