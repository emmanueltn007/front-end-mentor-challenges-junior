import dropdownItems from "../../data/navDropdownItems";

function ConnectDropdownItems ({ listClass, itemClass }) {
    return (
        <ul className={listClass}>
            {dropdownItems.connect.map((connectItem) => {
                return (
                    <li 
                        key={connectItem}
                        className={itemClass}
                    >
                        {connectItem}
                    </li>
                );
            })}
        </ul>
    );
}

export default ConnectDropdownItems