import ClearFormButton from "./ClearFormButton";
import Form from "./Form";

function FormCard() {

  return (
    <section className="p-4">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-[hsl(202,55%,16%)] text-2xl">
          Mortgage Calculator
        </h1>
        <ClearFormButton /> 
      </div>
      <Form />
    </section>
  );
}

export default FormCard;