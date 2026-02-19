import { useContext } from "react";
import { FormContext } from "../hooks/FormContext";

function ClearFormButton () {

    const { clearForm } = useContext(FormContext);

    return (
        <button onClick={clearForm} className="cursor-pointer text-[hsl(200,24%,40%)] transition duration-300 ease-in-out hover:text-[hsl(202,55%,16%)] w-fit relative after:content-[''] after:absolute after:bottom-1 after:w-full after:h-0.5 after:left-0 after:bg-[hsl(200,24%,40%)]">
          Clear All
        </button>
    );
}

export default ClearFormButton