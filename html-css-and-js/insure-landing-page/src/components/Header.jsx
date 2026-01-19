import { useEffect, useState } from "react";
import MobileMenu from "./header-and-footer-sub-components/MobileMenu";
import DesktopMenu from "./header-and-footer-sub-components/DesktopMenu";

function Header () {
    // useState for opening and closing the mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // This disables screen scrolling when the mobile menu is open
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";

        return () => {
            document.body.style.overflow = "";
        }
    }, [isOpen])

    return (
        <header className="flex items-center justify-between px-8 py-12 md:px-16 lg:px-32 relative bg-[hsl(0,0%,98%)]">
            {/* LOGO IMAGE */}
            <img className="h-5" src="/images/logo.svg" alt="insure logo" />

            {/* MOBILE NAV */}
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* DESKTOP NAV */}
            <DesktopMenu />
        </header>
    );
}

export default Header