import React from "react";
import dropdownItems from "../../data/navDropdownItems";

function NavItems({
  isOpen,
  openItem,
  setOpenItem,
  container,
  dropdownMenu,
  activeColor,
  notActiveColor,
  arrowActive,
  arrowNotActive,
  labelClass,
  labelContainer,
  containerAll,
}) {

  // This handles all the dropdown menus, only one of them can be open at each time

  const handleNavItemToggle = (key) =>
    setOpenItem((prev) => (prev === key ? null : key));

  // These represent the three down menus
  
  const items = [
    { label: "Products", key: "product" },
    { label: "Company", key: "company" },
    { label: "Connect", key: "connect" },
  ];

  return (
    <div className={`flex gap-4 ${container}`}>
      {/* I mapped through items for the dropdowns buttons */}
      {/* I made each button to change color along with the arrow when it's active - only one dropdown item can be open each time */}

      {items.map((item) => {
        return (
          <div className={`relative ${containerAll}`} key={item.key}>
            <button
              className={`flex items-center gap-2 cursor-pointer ${labelContainer}`}
              onClick={() => handleNavItemToggle(item.key)}
            >
              <span
                className={`${labelClass} ${openItem === item.key ? activeColor : notActiveColor}`}
              >
                {item.label}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="7"
                className={`transition duration-300 ease-in-out 
                  ${openItem === item.key ? "rotate-180" : ""}
                   ${openItem === item.key ? arrowActive : arrowNotActive}
                  `}
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  opacity=".75"
                  d="M1 1l4 4 4-4"
                />
              </svg>
            </button>

            {/* Mapped through the dropdown items from navDropdownItems.js for each of the items above */}

            {openItem === item.key && (
              <div className={`flex flex-col gap-2 ${dropdownMenu}`}>
                {(dropdownItems[item.key] || []).map((link) => (
                  <button
                    className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                    key={link}
                  >
                    {link}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {/* These buttons only appear on the mobile menu when it is open */}

      {isOpen && (
        <>
          <hr className="w-full" />
          <div className="flex flex-col gap-4 font-semibold w-full">
            <button className="text-[hsl(208,49%,24%)] cursor-pointer border-2 border-transparent hover:border-[hsl(208,49%,24%)] py-2 rounded-3xl transition duration-300 ease-in-out">
              Login
            </button>
            <button className="cursor-pointer text-white bg-[linear-gradient(90deg,hsl(13,100%,72%),hsl(353,100%,62%))] py-2 rounded-3xl hover:opacity-75 transition duration-300 ease-in-out">
              Sign Up
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default NavItems;
