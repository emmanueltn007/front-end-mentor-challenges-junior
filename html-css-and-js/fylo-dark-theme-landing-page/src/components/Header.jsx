import items from "../utilities/navItems";

function Header () {
    return (
        <header className="flex items-center justify-between p-8">
           <img className="md:h-8" src="/images/logo.svg" alt="fylo logo" />
           <nav>
                <ul className="flex gap-4 text-gray-300 max-md:text-lg">
                    {items.map((item, index) => {
                        return (
                            <li 
                                key={index}
                                className="hover:text-[hsl(0,0%,100%)] transition duration-300 ease-in-out cursor-pointer relative
                                            after:absolute after:content-[''] after:-bottom-1 after:left-0 after:w-0 after:bg-[hsl(0,0%,100%)]
                                            after:h-0.5 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
           </nav>
        </header>
    );
}

export default Header