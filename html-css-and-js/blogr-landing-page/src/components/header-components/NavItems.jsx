function NavItems ({ divClass, buttonClass, isOpen }) {
    const items = ["Products", "Company", "Connect"];

    return (
        <div className={divClass}>
            {items.map((item) => {
                return (
                    <button className={buttonClass}>{item}</button>
                );
            })}

            {isOpen && 
                <>
                    <hr />
                    <div className="flex flex-col gap-4 font-semibold">
                        <button className="text-[hsl(208,49%,24%)] cursor-pointer">Login</button>
                        <button 
                            className="cursor-pointer text-white bg-[linear-gradient(90deg,hsl(13,100%,72%),hsl(353,100%,62%))] py-2 rounded-3xl"
                        >
                            Sign Up
                        </button>
                    </div>
                </>    
            }
        </div>
    );
}

export default NavItems