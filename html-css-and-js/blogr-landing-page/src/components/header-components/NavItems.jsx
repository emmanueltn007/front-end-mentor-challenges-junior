function NavItems({ divClass, buttonClass, isOpen, openItem, setOpenItem }) {

  const handleNavItemToggle = (item) =>
    setOpenItem((prev) => (prev === item ? null : item));

  const items = ["Products", "Company", "Connect"];

  return (
    <div className={divClass}>
      {items.map((item) => {
        return (
          <button
            key={item}
            onClick={() => handleNavItemToggle(item)}
            className={buttonClass}
          >
            {item}
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" 
                className={`transition duration-300 ease-in-out ${openItem === item ? "rotate-180" : "text-white"}`}>
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity=".75"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </button>
        );
      })}

      {isOpen && (
        <>
          <hr />
          <div className="flex flex-col gap-4 font-semibold w-full">
            <button className="text-[hsl(208,49%,24%)] cursor-pointer">
              Login
            </button>
            <button className="cursor-pointer text-white bg-[linear-gradient(90deg,hsl(13,100%,72%),hsl(353,100%,62%))] py-2 rounded-3xl">
              Sign Up
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default NavItems;
