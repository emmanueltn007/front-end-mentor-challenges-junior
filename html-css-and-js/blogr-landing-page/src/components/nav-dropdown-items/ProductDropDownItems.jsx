import navDropdownItems from "../../data/navDropdownItems";

function ProductDropdownItems ({ listClass, itemClass}) {
    return (
        <ul className={listClass}>
            {navDropdownItems.product.map((productItem) => {
                return (
                    <li 
                        key={productItem}
                        className={itemClass}
                    >
                        {productItem}
                    </li>
                );
            })}
        </ul>
    );
}

export default ProductDropdownItems