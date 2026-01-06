import { useState } from "react";
import NavItems from "./header-components/NavItems";

function Header () {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-between items-center relative">
            <div>
                <img src="/images/logo.svg" alt="sunnyside logo" />
            </div>

            {/* MOBILE NAV */}
            <NavItems 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                navClass="" 
                container={`md:hidden bg-[hsl(0,100%,100%)] flex flex-col items-center gap-4 absolute left-8 right-8 ${isOpen ? "block" : "hidden"}`}
                listClass="flex flex-col gap-4 text-center"
                buttonClass="bg-[hsl(51,100%,49%)] text-[hsl(212,27%,19%)] py-2 px-4 rounded-3xl cursor-pointer"
            />

            {/* DESKTOP NAV */}
            <NavItems 
                navClass="max-md:hidden"
                container="flex items-center gap-4"
                listClass="flex gap-4 text-white"
                itemClass="cursor-pointer" 
                buttonClass="bg-[hsl(0,100%,100%)] text-[hsl(212,27%,19%)] py-2 px-4 rounded-3xl cursor-pointer"
            />
        </header>
    );
}

export default Header