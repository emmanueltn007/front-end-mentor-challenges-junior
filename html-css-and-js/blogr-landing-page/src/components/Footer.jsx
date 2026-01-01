function Footer () {
    return (
        <footer className="py-8 md:py-16 px-8 md:pl-16 bg-[hsl(240,10%,16%)] text-center flex flex-col md:flex-row items-center rounded-tr-4xl">
            <div>
                <img src="/images/logo.svg" alt="blogr logo image" />
            </div>
            <nav className="w-full text-white flex flex-col md:flex-row md:justify-evenly gap-4">
                <div>
                    <p className="font-bold">
                        Product
                    </p>
                    <ul>
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
                <div>
                    <p className="font-bold">
                        Company
                    </p>
                    <ul>
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
                <div>
                    <p className="font-bold">
                        Connect
                    </p>
                    <ul>
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