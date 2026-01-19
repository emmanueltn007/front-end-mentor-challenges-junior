import NavLinks from "./NavLinks";

function MobileMenu ({ isOpen, setIsOpen }) {

    // This handles the opening and closing of the mobile menu
    const handleMenuToggle = () => setIsOpen(prev => !prev);

    return (
        <nav className="md:hidden">
            <button onClick={handleMenuToggle} className="md:hidden cursor-pointer">
                <img src={isOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"} alt="menu icons" />
            </button>
            <NavLinks 
                container={`${isOpen ? "translate-x-0" : "translate-x-full"} px-8 py-16 transition duration-500 ease-in-out h-screen absolute top-full left-0 right-0 bg-[hsl(270,9%,17%)] bg-[url('/images/bg-pattern-mobile-nav.svg')] bg-cover bg-no-repeat bg-bottom flex flex-col gap-6`}
                listClass="flex flex-col gap-6 font-semibold text-center"
                itemClass="text-[hsl(0,0%,98%)]"
                buttonClass="text-[hsl(0,0%,98%)] border-2 border-[hsl(0,0%,98%)] py-2 font-semibold cursor-pointer"
            />
        </nav>
    );
}

export default MobileMenu