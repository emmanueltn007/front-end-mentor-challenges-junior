function Footer () {
    return (
        <footer className="py-8 md:py-16 px-8 md:pl-16 bg-[hsl(240,10%,16%)] text-center flex flex-col gap-16 md:flex-row max-md:items-center rounded-tr-[128px]">
            <div>
                <img className="h-8" src="/images/logo.svg" alt="blogr logo image" />
            </div>
            <nav className="w-full text-white flex flex-col md:flex-row md:justify-evenly gap-8">
                <div className="flex flex-col gap-4">
                    <p className="font-bold">
                        Product
                    </p>
                    <ul className="flex flex-col gap-1 text-gray-400">
                        <li>
                            Overview
                        </li>
                        <li>
                            Pricing
                        </li>
                        <li>
                            Marketplace
                        </li>
                        <li>
                            features
                        </li>
                        <li>
                            Intergration
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-bold">
                        Company
                    </p>
                    <ul className="flex flex-col gap-1 text-gray-400">
                        <li>
                            About
                        </li>
                        <li>
                            Team
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            Careers
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-bold">
                        Connect
                    </p>
                    <ul className="flex flex-col gap-1 text-gray-400">
                        <li>
                            Contact
                        </li>
                        <li>
                            Newsletter
                        </li>
                        <li>
                            LinkedIn
                        </li>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}

export default Footer