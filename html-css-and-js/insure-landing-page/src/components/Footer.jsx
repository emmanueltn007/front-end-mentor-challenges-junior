import socials from "../utilities/socialLinks"
import ourCompanyItems from "../utilities/ourCompany"
import helpItems from "../utilities/helpMe";
import contacts from "../utilities/contact";
import others from "../utilities/others"

function Footer () {
    const containerStyle = "font-semibold flex flex-col gap-4";
    const titleStyle = "text-[hsl(273,4%,51%)]";
    const listContainerStyle = "text-[hsl(256,26%,20%)] flex flex-col max-md:items-center";
    const itemStyle = "w-fit relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[hsl(256,26%,20%)] hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"

    return (
        <footer className="flex flex-col gap-4 px-8 py-12 md:px-16 lg:px-32 bg-[hsl(0,0%,98%)] bg-[url('/images/bg-pattern-footer-mobile.svg')] md:bg-[url('/images/bg-pattern-footer-desktop.svg')] bg-size-[100%] md:bg-size-[500px,500px] bg-no-repeat bg-top-left">
            <div className="flex flex-col max-md:items-center md:flex-row md:justify-between max-md:gap-8">
                <img className="self-start max-md:mx-auto" src="/images/logo.svg" alt="logo image" />
                <div className="flex gap-4">
                    {socials.map((social) => {
                        return (
                            <a key={social} href="#" className="text-[hsl(273,4%,51%)] hover:text-[hsl(256,26%,20%)] transition duration-300 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path fill="currentColor" d={social} /></svg>
                            </a>
                            
                        );
                    })}
                </div>
            </div>
            <hr className="text-[hsl(273,4%,51%)]" />
            <div className="md:flex-row md:justify-between max-md:text-center text-lg md:text-md lg:text-sm flex flex-col max-md:items-center max-md:gap-8">
                <div className={containerStyle}>
                    <h3 className={titleStyle}>OUR COMPANY</h3>
                    <ul className={listContainerStyle}>
                        {ourCompanyItems.map((companyItem) => {
                            return (
                                <li className={itemStyle} key={companyItem}>
                                    <a href="#">{companyItem}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={containerStyle}>
                    <h3 className={titleStyle}>HELP ME</h3>
                    <ul className={listContainerStyle}>
                        {helpItems.map((helpItem) => {
                            return (
                                <li className={itemStyle} key={helpItem}>
                                    <a href="#">{helpItem}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={containerStyle}>
                    <h3 className={titleStyle}>CONTACT</h3>
                    <ul className={listContainerStyle}>
                        {contacts.map((contact) => {
                            return (
                                <li className={itemStyle} key={contact}>
                                    <a href="#">{contact}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={containerStyle}>
                    <h3 className={titleStyle}>OTHERS</h3>
                    <ul className={listContainerStyle}>
                        {others.map((other) => {
                            return (
                                <li className={itemStyle} key={other}>
                                    <a href="#">{other}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer