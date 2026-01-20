import NavLinks from "./NavLinks";

function MobileMenu ({ isOpen, setIsOpen }) {

    // This handles the opening and closing of the mobile menu
    const handleMenuToggle = () => setIsOpen(prev => !prev);

    return (
        <nav className="md:hidden text-lg">
            <button onClick={handleMenuToggle} className="md:hidden cursor-pointer">
                <img src={isOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"} alt="menu icons" />
            </button>
            <NavLinks 
                container={`${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} px-8 py-16 transition duration-500 ease-in-out h-screen absolute top-full left-0 right-0 bg-[hsl(270,9%,17%)] bg-[url('/images/bg-pattern-mobile-nav.svg')] bg-contain bg-no-repeat bg-bottom flex flex-col gap-6 z-50`}
                listClass="flex flex-col gap-6 font-semibold text-center"
                itemClass="text-[hsl(0,0%,98%)] relative w-fit after:content-[''] after:absolute after:bottom-0 after:w-0 after:left-0 after:h-0.5 after:bg-[hsl(0,0%,100%)] hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
                buttonClass="text-[hsl(0,0%,98%)] border-2 border-[hsl(0,0%,98%)] py-2 font-semibold cursor-pointer hover:bg-[hsl(0,0%,100%)] hover:text-[hsl(256,26%,20%)] transition-all duration-300 ease-in-out"
            />
        </nav>
    );
}

export default MobileMenu