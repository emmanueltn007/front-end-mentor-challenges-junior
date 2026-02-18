import { useState } from "react";

export function useForm () {
    const longResultsParagraphText = "Complete the form and click 'Calculate Repayments' to see what your monthly repayments would be."

    // useStates
    const [mortgageAmount, setMortgageAmount] = useState("");
    const [mortgageTerm, setMortgageTerm] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [mortgageAmountError, setMortgageAmountError] = useState("");
    const [mortgageTermError, setMortgageTermError] = useState("");
    const [interestRateError, setInterestRateError] = useState("");
    const [resultsText, setResultsText] = useState("Results shown here");
    const [resultsParagraph, setResultsParagraph] = useState(longResultsParagraphText);
    const [resultsContainer, setResultsContainer] = useState(false);
    const [monthlyRepayments, setMonthlyRepayments] = useState("");
    const [totalRepayment, setTotalRepayment] = useState("");
    const [monthlyInterestRate, setMonthlyInterestRate] = useState("");
    const [totalInterestRate, setTotalInterestRate] = useState("");
    const [selected, setSelected] = useState("");


    const handleCalculations = (e) => {
        e.preventDefault();

        const P = Number(mortgageAmount);
        const n = Number(mortgageTerm) * 12;
        const i = (Number(interestRate) / 100) / 12;

        // Mortgage amount validation
        if (!P) {
            setMortgageAmountError("This field is required");
            return;
        } else {
            setMortgageAmountError("");
        }
        
        // Mortgage term validation
        if (!n) {
            setMortgageTermError("This field is required");
            return;
        } else {
            setMortgageTermError("");
        }

        // Interest rate validation
        if (!n) {
            setInterestRateError("This field is required");
            return;
        } else {
            setInterestRateError("");
        }

        // Mortgage type selection
        if(!selected) {
            return;
        }

        const M = P * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);

        const T = M * n;
        const monthlyInterestRateToBePaid = P * (i / 12)

        const totalInterestToBePaid = M * n - P;

        if(selected === "repayment") {
            setMonthlyRepayments(M.toFixed(2));
            setTotalRepayment(T.toFixed(2));
        } else {
            setMonthlyInterestRate(monthlyInterestRateToBePaid.toFixed(2));
            setTotalInterestRate(totalInterestToBePaid.toFixed(2));
        }

        

        setResultsText("Your Results");
        setResultsParagraph("Your results are shown below based on the information you provided. To adjust the results, edit the form and click 'Calculate Repayments' again.");
        setResultsContainer((prev) => !prev);
    }

    const clearForm = () => {
        setMortgageAmount("");
        setMortgageTerm("");
        setInterestRate("");
        setMonthlyRepayments("");
        setTotalRepayment("");
        setResultsContainer(false);
    }

    return {
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
        totalRepayment,
        monthlyInterestRate,
        totalInterestRate,
        clearForm,
        selected,
        setSelected
    };
}