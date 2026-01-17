import { useState, useEffect } from "react";
import MobileNav from "./header-and-footer-components/MobileNav";
import DesktopNav from "./header-and-footer-components/DesktopNav";

function Header () {
  // useStates for opening and closing mobile nav
  const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <header className="flex items-center justify-between px-8 md:px-24 py-16 md:py-12 relative">
      <img src="/images/logo.svg" alt="loopstudios logo" />

      {/* MOBILE NAV */}
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* DESKTOP NAV */}
      <DesktopNav />

    </header>
  );
}

export default Header