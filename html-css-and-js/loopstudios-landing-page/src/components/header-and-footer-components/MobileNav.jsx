import NavLinks from "./NavLinks";

function MobileNav ({isOpen, setIsOpen}) {

  // When clicking on the close icon the mobile nav will open
  const handleMenuToggle = () => setIsOpen(true);

  return (
    <nav className="md:hidden">
        <button onClick={handleMenuToggle} className="cursor-pointer">
          <img src="/images/icon-hamburger.svg" alt="menu icon" />
        </button>
        <NavLinks 
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          containerClass={`absolute top-0 left-0 h-screen w-screen transition-transform duration-300 ease-in-out bg-[hsl(0,0%,0%)] z-100 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          listClass="flex flex-col gap-4 px-8 uppercase text-2xl"
          itemsClass="text-[hsl(0,0%,85%)]" 
        />
      </nav>
  );
}

export default MobileNav