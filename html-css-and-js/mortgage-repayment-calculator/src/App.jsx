import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { useForm } from "./hooks/useForm";

function App() {
  const { 
    handleCalculations, 
    mortgageAmount, 
    setMortgageAmount, 
    mortgageTerm, 
    setMortgageTerm,
    interestRate,
    setInterestRate,
    mortgageAmountError,
    mortgageTermError,
    interestRateError,
    resultsText,
    resultsParagraph,
    resultsContainer,
    monthlyRepayments,
    totalRepayment
  } = useForm();
 

  return ( 
    <main className="min-h-screen w-screen md:flex md:items-center bg-[hsl(202,86%,94%)]">
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:w-2/3 md:mx-auto md:rounded-xl md:overflow-hidden bg-[hsl(0,0%,100%)]">
        <LeftSide
          handleCalculations={handleCalculations}
          mortgageAmount={mortgageAmount}
          setMortgageAmount={setMortgageAmount}
          mortgageTerm={mortgageTerm}
          setMortgageTerm={setMortgageTerm}
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          mortgageAmountError={mortgageAmountError}
          mortgageTermError={mortgageTermError}
          interestRateError={interestRateError}
        />
        <RightSide resultsText={resultsText} resultsParagraph={resultsParagraph} resultsContainer={resultsContainer} monthlyRepayments={monthlyRepayments} totalRepayment={totalRepayment} />
      </div>
    </main>
  );
}

export default App