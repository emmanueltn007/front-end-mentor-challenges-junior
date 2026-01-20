

function LeftSide({ 
  mortgageAmount, 
  setMortgageAmount, 
  mortgageTerm, 
  setMortgageTerm, 
  interestRate, 
  setInterestRate, 
  calculateRepayments 
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
      <form noValidate onSubmit={calculateRepayments} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="mortgage-amount"
            className="text-[hsl(200,24%,40%)] font-semibold"
          >
            Mortgage Amount
          </label>
          <input
            onChange={(e) => setMortgageAmount(e.target.value)}
            value={mortgageAmount}
            type="number"
            id="mortgage-amount"
            className="border border-[hsl(200,24%,40%)] hover:border-[hsl(202,55%,16%)] py-2 outline-none rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="mortgage-term"
              className="text-[hsl(200,24%,40%)] font-semibold"
            >
              Mortgage Term
            </label>
            <input
              onChange={(e) => setMortgageTerm(e.target.value)}
              value={mortgageTerm}
              type="number"
              id="mortgage-term"
              className="border border-[hsl(200,24%,40%)] py-2 outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="interest-rate"
              className="text-[hsl(200,24%,40%)] font-semibold"
            >
              Interest Rate
            </label>
            <input
              onChange={(e) => setInterestRate(e.target.value)}
              value={interestRate}
              type="number"
              id="interest-rate"
              className="border border-[hsl(200,24%,40%)] py-2 outline-none rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[hsl(200,24%,40%)] font-semibold">
            Morgate Type
          </label>
          <div className="flex gap-4 border border-[hsl(200,24%,40%)] py-2 px-4 rounded-md">
            <input
              type="radio"
              name="mortgage-type"
              id="repayment"
              value="repayment"
            />
            <label htmlFor="repayment" className="text-[hsl(202,55%,16%)] font-semibold">Repayment</label>
          </div>
          <div className="flex gap-4 border border-[hsl(200,24%,40%)] py-2 px-4 rounded-md">
            <input
              type="radio"
              name="mortgage-type"
              id="interest-only"
              value="interest-only"
            />
            <label htmlFor="interest-only" className="text-[hsl(202,55%,16%)] font-semibold">Interest Only</label>
          </div>
        </div>
        <button className="flex justify-center gap-2 bg-[hsl(61,70%,52%)] py-2 font-semibold text-[hsl(202,55%,16%)] rounded-3xl w-full cursor-pointer">
            <img src="/assets/images/icon-calculator.svg" alt="calculator icon" />
            Calculate Repayments
        </button>
      </form>
    </div>
  );
}

export default LeftSide;