function Form ({ 
  handleCalculations, 
  mortgageAmount, 
  setMortgageAmount, 
  mortgageTerm, 
  setMortgageTerm,
  interestRate,
  setInterestRate
}) {
    return (
        <form noValidate onSubmit={(e) => handleCalculations(e)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="mortgage-amount"
            className="text-[hsl(200,24%,40%)] font-semibold"
          >
            Mortgage Amount
          </label>
          <input
            type="number"
            id="mortgage-amount"
            value={mortgageAmount}
            onChange={(e) => setMortgageAmount(e.target.value)}
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
              type="number"
              id="mortgage-term"
              value={mortgageTerm}
              onChange={(e) => setMortgageTerm(e.target.value)}
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
              type="number"
              id="interest-rate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
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
        <button type="submit" className="flex justify-center gap-2 bg-[hsl(61,70%,52%)] py-2 font-semibold text-[hsl(202,55%,16%)] rounded-3xl w-full cursor-pointer">
            <img src="/assets/images/icon-calculator.svg" alt="calculator icon" />
            Calculate Repayments
        </button>
      </form>
    );
}

export default Form