import Form from "./Form";


function LeftSide({ 
  mortgageAmount, 
  setMortgageAmount, 
  mortgageTerm, 
  setMortgageTerm, 
  interestRate, 
  setInterestRate, 
  calculateRepayments,
  mortgageType,
  setMortgageType
}) {

  return (
    <div className="py-8 px-4">
      <div className="flex flex-col md:flex-row md:justify-between">
        <h1 className="text-2xl text-[hsl(202,55%,16%)] font-semibold">
          Mortgage Calculator
        </h1>
        <button className="text-[hsl(200,24%,40%)] w-fit relative after:content-[''] after:absolute after:bottom-0 after:w-full after:h-0.5 after:left-0 after:bg-[hsl(200,24%,40%)]">
          Clear All
        </button>
      </div>
      <Form 
        mortgageAmount={mortgageAmount} 
        setMortgageAmount={setMortgageAmount} 
        mortgageTerm={mortgageTerm}
        setMortgageTerm={setMortgageTerm}
        interestRate={interestRate}
        setInterestRate={setInterestRate} 
        calculateRepayments={calculateRepayments}
        mortgageType={mortgageType}
        setMortgageType={setMortgageType}
      />
    </div>
  );
}

export default LeftSide;