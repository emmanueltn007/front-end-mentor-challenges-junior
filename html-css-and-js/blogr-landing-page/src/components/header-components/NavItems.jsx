import React from "react";
import dropdownItems from "../../data/navDropdownItems";

function NavItems({
  dropdownContainer,
  divClass,
  spanClass,
  imageClass,
  buttonClass,
  dropdownClass,
  dropdownButtonClass,
  isOpen,
  openItem,
  setOpenItem,
}) {

  const handleNavItemToggle = (key) =>
    setOpenItem((prev) => (prev === key ? null : key));

  const items = [
    { label: "Products", key: "product" },
    { label: "Company", key: "company" },
    { label: "Connect", key: "connect" },
  ];

  return (
    <div className={divClass}>
      {items.map((item) => {
        return (
          <div className={`relative ${dropdownContainer}`} key={item.key}>
            <button
              onClick={() => handleNavItemToggle(item.key)}
              className={buttonClass}
            >
              <span className={spanClass}>{item.label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="7"
                className={`transition duration-300 ease-in-out ${imageClass} ${
                  openItem === item.key ? "rotate-180" : ""
                }`}
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

            {/* DROPDOWN */}
            {openItem === item.key && (
              <div className={`flex flex-col items-start ${dropdownClass}`}>
                {(dropdownItems[item.key] || []).map((link) => (
                  <button className={dropdownButtonClass} key={link}>{link}</button>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {isOpen && (
        <>
          <hr className="w-full" />
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
