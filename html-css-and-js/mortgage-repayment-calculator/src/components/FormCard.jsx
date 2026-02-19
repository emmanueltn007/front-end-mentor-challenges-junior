import ClearFormButton from "./ClearFormButton";
import Form from "./Form";

function FormCard() {

  return (
    <div className="py-8 px-4">
      <div className="flex flex-col md:flex-row md:justify-between">
        <h1 className="text-2xl text-[hsl(202,55%,16%)] font-semibold">
          Mortgage Calculator
        </h1>
        <ClearFormButton /> 
      </div>
      <Form />
    </div>
  );
}

export default FormCard;