import NavLinks from "./NavLinks";

function DesktopNav() {
  return (
    <nav className="max-md:hidden">
      <NavLinks
        listClass="flex gap-4 text-[hsl(0,0%,85%)] font-semibold"
        itemsClass="text-xl relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[hsl(0,0%,100%)] hover:after:w-full after:transition-all after:duration-300 after:ease-in-out hover:text-[hsl(0,0%,100%)] transition duration-300 ease-in-out"
      />
    </nav>
  );
}

export default DesktopNav;
