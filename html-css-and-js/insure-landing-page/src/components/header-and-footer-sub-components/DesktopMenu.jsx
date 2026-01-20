import NavLinks from "./NavLinks";

function DesktopMenu () {
    return (
        <NavLinks 
            container="max-md:hidden flex items-center gap-4 md:text-md lg:text-sm" 
            listClass="flex gap-4"
            itemClass="font-semibold text-[hsl(273,4%,51%)] hover:text-[hsl(270,9%,17%)] transition duration-300 ease-in-out"
            buttonClass="cursor-pointer font-semibold text-[hsl(270,9%,17%)] border-2 border-[hsl(270,9%,17%)] py-2 px-4 hover:text-[hsl(0,0%,100%)] hover:bg-[hsl(270,9%,17%))] transition-all duration-300 ease-in-out"
        />
    );
}

export default DesktopMenu