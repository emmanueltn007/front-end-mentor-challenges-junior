import { useContext } from "react";
import { FormContext } from "../hooks/FormContext";

function FormInputs() {
  const {
    mortgageAmount,
    setMortgageAmount,
    mortgageAmountError,
    mortgageTerm,
    setMortgageTerm,
    mortgageTermError,
    interestRate,
    setInterestRate,
    interestRateError,
    setSelected,
    selected,
  } = useContext(FormContext);

  return (
    <>
      <div>
        <label
          htmlFor="mortgage-amount"
        >
          Mortgage Amount
        </label>
        <input
          type="number"
          id="mortgage-amount"
          value={mortgageAmount}
          onChange={(e) => setMortgageAmount(e.target.value)}
        />
        {mortgageAmountError && <p>{mortgageAmountError}</p>}
      </div>
      <div>
        <div>
          <label
            htmlFor="mortgage-term"
          >
            Mortgage Term
          </label>
          <input
            type="number"
            id="mortgage-term"
            value={mortgageTerm}
            onChange={(e) => setMortgageTerm(e.target.value)}
          />
          {mortgageTermError && <p>{mortgageAmountError}</p>}
        </div>
        <div>
          <label
            htmlFor="interest-rate"
          >
            Interest Rate
          </label>
          <input
            type="number"
            id="interest-rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          {interestRateError && <p>{interestRateError}</p>}
        </div>
      </div>
      <div>
        <label>
          Morgate Type
        </label>
        <div>
          <input
            type="radio"
            name="mortgage-type"
            onChange={(e) => setSelected(e.target.value)}
            checked={selected === "repayment"}
            id="repayment"
            value="repayment"
          />
          <label
            htmlFor="repayment"
          >
            Repayment
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="mortgage-type"
            onChange={(e) => setSelected(e.target.value)}
            checked={selected === "interest-only"}
            id="interest-only"
            value="interest-only"
          />
          <label
            htmlFor="interest-only"
          >
            Interest Only
          </label>
        </div>
      </div>
    </>
  );
}

export default FormInputs;