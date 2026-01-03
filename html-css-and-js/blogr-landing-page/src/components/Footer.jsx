import CompanyDropdownItems from "./nav-dropdown-items/CompanyDropdownItems";
import ConnectDropdownItems from "./nav-dropdown-items/ConnectDropdownItems";
import ProductDropdownItems from "./nav-dropdown-items/ProductDropDownItems";

function Footer () {
    const footerListClass = "flex flex-col items-center gap-1 text-gray-400";

    const footerItemClass = "cursor-pointer w-fit hover:text-white transition duration-300 ease-in-out relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 "
                            + "after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"

    return (
        <footer className="py-16 px-8 md:pl-16 bg-[hsl(240,10%,16%)] text-center flex flex-col gap-16 md:flex-row max-md:items-center rounded-tr-[128px]">
            <div>
                <img className="h-8" src="/images/logo.svg" alt="blogr logo image" />
            </div>
            <nav className="w-full text-white flex flex-col md:flex-row md:justify-evenly gap-8">
                <div className="flex flex-col gap-4">
                    <p className="font-bold">
                        Product
                    </p>
                    <ProductDropdownItems 
                        listClass={footerListClass}
                        itemClass={footerItemClass} 
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-bold">
                        Company
                    </p>
                    <CompanyDropdownItems 
                        listClass={footerListClass}
                        itemClass={footerItemClass}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-bold">
                        Connect
                    </p>
                    <ConnectDropdownItems 
                        listClass={footerListClass}
                        itemClass={footerItemClass}
                    />
                </div>
            </nav>
        </footer>
    );
}

export default Footer