function MobileNav({ isOpen, setIsOpen, children }) {
  const handleMenuToggle = () => setIsOpen((prev) => !prev);

  return (
    <nav className="md:hidden z-50">
      <button
        className="cursor-pointer hover:scale-110 transition-transform duration-300"
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
