import { useContext } from "react";
import { FormContext } from "../hooks/FormContext";

function ClearFormButton () {

    const { clearForm } = useContext(FormContext);

    return (
        <button 
            onClick={clearForm}
            className="self-start cursor-pointer text-[hsl(200,24%,40%)] 
                    relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:bg-[hsl(200,24%,40%)]"
        >
          Clear All
        </button>
    );
}

export default ClearFormButton