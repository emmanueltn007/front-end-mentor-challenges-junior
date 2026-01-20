import links from "../../utilities/navLinks";

function NavLinks({ container, listClass, itemClass, buttonClass }) {
  return (
    <div className={container}>
      <ul className={listClass}>
        {links.map((link) => {
          return (
            <li key={link} className={itemClass}>
              <a href="#">{link}</a>
            </li>
          );
        })}
      </ul>
      <button className={buttonClass}>VIEW PLANS</button>
    </div>
  );
}

export default NavLinks;
