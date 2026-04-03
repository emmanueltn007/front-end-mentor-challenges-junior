import { useContext } from "react";
import { FormContext } from "../hooks/FormContext";

function ClearFormButton () {

    const { clearForm } = useContext(FormContext);

    return (
        <button onClick={clearForm}>
          Clear All
        </button>
    );
}

export default ClearFormButton