import { useState } from "react";
import MobileNav from "./header-components/MobileNav";
import NavItems from "./header-components/NavItems";

function Header () {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex items-center justify-between relative">
            <div className="cursor-pointer flex items-center gap-4">
                <img src="/images/logo.svg" alt="blogr logo" />

                {/* DESKTOP NAV */}
                <NavItems 
                    divClass="text-white font-semibold flex gap-4 max-md:hidden" 
                    buttonClass="cursor-pointer"
                />
            </div>

            {/* MOBILE NAV */}
            <MobileNav isOpen={isOpen} setIsOpen={setIsOpen}>
                <NavItems 
                    divClass="p-8 bg-white flex flex-col gap-8 w-full absolute left-1/2 top-16 -translate-x-1/2 rounded-xl" 
                    buttonClass="text-[hsl(208,49%,24%)] font-semibold cursor-pointer" isOpen={isOpen}
                />
            </MobileNav>

            <div className="max-md:hidden flex gap-4 font-semibold">
                <button className="cursor-pointer text-white">Login</button>
                <button className="cursor-pointer text-[hsl(356,100%,66%)] bg-white py-2 px-6 rounded-3xl">Sign Up</button>
            </div>
        </header>
    );
}

export default Header