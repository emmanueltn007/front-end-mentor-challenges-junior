import ClearFormButton from "./ClearFormButton";
import Form from "./Form";

function FormCard() {

  return (
    <div>
      <div>
        <h1>
          Mortgage Calculator
        </h1>
        <ClearFormButton /> 
      </div>
      <Form />
    </div>
  );
}

export default FormCard;