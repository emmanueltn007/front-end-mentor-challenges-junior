import { useContext } from "react";
import { FormContext } from "../hooks/FormContext";

function ResultsDisplayCard () {
    const { resultsText, resultsParagraph, resultsContainer, selected, monthlyRepayments, totalRepayment, monthlyInterestRate, totalInterestRate } = useContext(FormContext);

    return (
        <div>
            <img src="/assets/images/illustration-empty.svg" alt="illustration image" />
            <h1>
                {resultsText}
            </h1>
            <p>
                {resultsParagraph}
            </p>
            {resultsContainer && (
                <div>
                    <div>
                        <span>
                            {selected === "repayment" ? "Your monthly repayments" : "Your monthly interest rate repayment"}
                        </span>
                        <span>
                            £{selected === "repayment" ? monthlyRepayments :  monthlyInterestRate}
                        </span>
                    </div>

                    <hr />

                    <div>
                        <span>
                            {selected === "repayment" ? "Total you'll repay over the term" : "Total interest you'll repay over the term"} 
                        </span>
                        <span>
                            £{selected === "repayment" ? totalRepayment : totalInterestRate}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ResultsDisplayCard