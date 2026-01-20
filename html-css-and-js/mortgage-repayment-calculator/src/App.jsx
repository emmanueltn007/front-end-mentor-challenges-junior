import { useState } from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  // useStates
  const [resultsText, setResultsText] = useState("Results Shown Here");
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");

  // Declarations
  const mortgageAmountInput = Number(mortgageAmount);
  const mortgageTermInput  = Number(mortgageTerm);
  const interestRateInput  = Number(interestRate / 100);

  // Calculations
  function calculateRepayments (e) {
    e.preventDefault();
    
    // MortgageAmout Conditionals
    if (!mortgageAmountInput) {
      console.log("MortgageAmount field cannot be empty");
      return;
    } else if (mortgageAmountInput < 1) {
      console.log("Please insert an amount that is equal or greater than 1");
      return;
    }

    // MortgagetermInput Conditionals
    if (!mortgageTermInput) {
      console.log("MortgageTerm field cannot be empty");
      return;
    } else if (mortgageAmountInput < 0) {
      console.log("Please insert an amount that is equal or greater than 1");
      return;
    }

    // InterestRate Conditionals
    if (!interestRateInput) {
      console.log("InterestRate field cannot be empty");
      return;
    }


  }

  return ( 
    <main className="min-h-screen w-screen md:flex md:items-center bg-[hsl(202,86%,94%)]">
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:w-2/3 md:mx-auto md:rounded-xl md:overflow-hidden bg-[hsl(0,0%,100%)]">
        <LeftSide
          mortgageAmount={mortgageAmount}
          setMortgageAmount={setMortgageAmount}
          mortgageTerm={mortgageTerm}
          setMortgageTerm={setMortgageTerm}
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          calculateRepayments={calculateRepayments}
        />
        <RightSide setResultsText={setResultsText} resultsText={resultsText} />
      </div>
    </main>
  );
}

export default App