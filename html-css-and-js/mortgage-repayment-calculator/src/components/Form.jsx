import { useContext } from "react";
import { FormContext } from "../hooks/FormContext";
import SubmitFormButton from "./SubmitFormButton";
import FormInputs from "./FormInputs";

function Form() {
  const { handleCalculations } = useContext(FormContext);

  return (
    <form
      noValidate
      onSubmit={(e) => handleCalculations(e)}
      className="flex flex-col gap-4"
    >
      <FormInputs />
      <SubmitFormButton />
    </form>
  );
}

export default Form;