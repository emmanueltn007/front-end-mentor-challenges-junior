function MobileNav({ isOpen, setIsOpen, children }) {
  const handleMenuToggle = () => setIsOpen((prev) => !prev);

  return (
    <nav className="md:hidden">
      <button
        className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
        onClick={handleMenuToggle}
      >
        <img
          src={isOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"}
          alt="menu icons"
        />
      </button>
      {isOpen && 
      <div>
        {children}
      </div>
      }
    </nav>
  );
}

export default MobileNav;
