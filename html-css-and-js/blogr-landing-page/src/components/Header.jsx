import { useState } from "react";
import MobileNav from "./header-components/MobileNav";
import NavItems from "./header-components/NavItems";

function Header () {
    const [isOpen, setIsOpen] = useState(false);
    const [openItem, setOpenItem] = useState(null);

    return (
        <header className="flex items-center justify-between relative text-[hsl(0,0%,87%)]">
            <div className="cursor-pointer flex items-center md:gap-16">
                <img className="h-8" src="/images/logo.svg" alt="blogr logo" />

                {/* DESKTOP NAV */}
                <NavItems 
                    openItem={openItem}
                    setOpenItem={setOpenItem}
                    divClass="text-[hsl(0,0%,87%)] font-semibold flex gap-4 max-md:hidden" 
                    spanClass="
                                after:content-[''] relative after:absolute after:block after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300"
                    buttonClass="cursor-pointer  hover:text-white flex items-center gap-2"
                    imageClass={``}
                />
            </div>

            {/* MOBILE NAV */}
            <MobileNav isOpen={isOpen} setIsOpen={setIsOpen}>
                <NavItems 
                    isOpen={isOpen}
                    divClass="p-8 bg-white flex flex-col items-center gap-8 w-full absolute left-1/2 top-16 -translate-x-1/2 rounded-xl shadow-md shadow-gray-500" 
                    buttonClass="text-[hsl(208,49%,24%)] font-semibold cursor-pointer flex items-center gap-2"
                    openItem={openItem}
                    setOpenItem={setOpenItem}
                    imageClass={` ${openItem ? "text-yellow-500" : "text-[hsl(355,100%,74%)]"}`}
                />
            </MobileNav>

            <div className="max-md:hidden flex gap-4 font-semibold">
                <button 
                    className="cursor-pointer px-6 py-2 rounded-3xl text-white border border-transparent hover:border-white transition-all duration-150 ease-in-out"
                >
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

export default Header