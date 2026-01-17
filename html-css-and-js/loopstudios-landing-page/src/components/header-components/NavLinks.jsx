import items from "../../utilities/headerItems";

function NavLinks({ listClass, itemsClass, containerClass, isOpen, setIsOpen }) {

  // When clicking on the close icon the mobile nav will close
  const handleCloseMenu = () => setIsOpen(false);
  
  return (
    <div className={containerClass}>

      {/* This only appears when the mobile menu is open */}
      {isOpen && (
        <div className="flex justify-between px-8 py-16">
          <img src="/images/logo.svg" alt="loopstudios logo" />
          <button onClick={handleCloseMenu} className="cursor-pointer">
            <img src="/images/icon-close.svg" alt="close menu icon" />
          </button>
        </div>
      )}

      {/* Mapping through the list to use for both the desktop and mobile nav */}
      <ul className={listClass}>
        {items.map((items) => {
          return (
            <li className={itemsClass} key={items}>
              {items}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavLinks;
