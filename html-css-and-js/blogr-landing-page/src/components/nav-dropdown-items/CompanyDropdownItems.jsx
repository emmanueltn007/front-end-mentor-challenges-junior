import dropdownItems from "../../data/navDropdownItems";

function CompanyDropdownItems ({ listClass, itemClass }) {
    return (
        <ul className={listClass}>
            {dropdownItems.company.map((companyItem) => {
                return (
                    <li 
                        key={companyItem}
                        className={itemClass}
                    >
                        {companyItem}
                    </li>
                );
            })}
        </ul>
    );
}

export default CompanyDropdownItems