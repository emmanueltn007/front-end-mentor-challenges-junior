function NavItems ({ navClass, container, listClass, itemClass, buttonClass, setIsOpen }) {
    const items = ["About", "Services", "Projects"];

    const handleMenuToggle = () => setIsOpen(prev => !prev)

    return (
        <nav className={navClass}>
            <button className="md:hidden cursor-pointer" onClick={handleMenuToggle}>
                <img src="/images/icon-hamburger.svg" alt="menu icon" />
            </button>
            <div className={container}>
                <ul className={listClass}>
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
                <button className={buttonClass}>CONTACT</button>
            </div>
        </nav>
    );
}

export default NavItems