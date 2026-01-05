function NavItems ({ listClass, itemClass, isOpen, setIsOpen }) {
    const items = ["Home", "New", "Popular", "Trending", "Categories"];

    const handleMenuClose = () => setIsOpen(false);

    return (
        <ul className={`text-[hsl(240,100%,5%)] ${listClass}`}>
            {isOpen && (
                <button
                    className="cursor-pointer absolute right-4 top-8" 
                    onClick={handleMenuClose}>
                    <img src="/assets/images/icon-menu-close.svg" alt="menu icon" />
                </button>
            )}
            {items.map((item) => {
                return (
                    <li 
                        className={itemClass}
                        key={item}
                    >
                        {item}
                    </li>
                );
            })}
        </ul>
    );
}

export default NavItems