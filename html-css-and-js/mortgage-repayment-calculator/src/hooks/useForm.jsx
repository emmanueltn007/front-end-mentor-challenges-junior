import { useState } from "react";

export function useForm () {
    // useStates
    const [mortgageAmount, setMortgageAmount] = useState("");
    const [mortgageTerm, setMortgageTerm] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [mortgageAmountError, setMortgageAmountError] = useState("");
    const [mortgageTermError, setMortgageTermError] = useState("");
    const [interestRateError, setInterestRateError] = useState("");

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

        const totalRepayment1 = P * (i * (1 + i) ** n);
        const totalRepayment2 = ((1 + i) ** n) -1;
        const totalRepayment = totalRepayment1 / totalRepayment2;
        const monthlyRepayment = totalRepayment / n;

        setTimeout(() => {
            console.log("Form is submitted!");
        }, 2000);

        console.log(`Total amount to be repaid is: ${totalRepayment}`);
        console.log(`Monthly repayments equal to: ${monthlyRepayment}`);

        console.log(`Mortgage Amount is $${P}`);
        console.log(`Mortgage Term is ${n} years`);
        console.log(`The interest rate is ${i}% per annum`);
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
        interestRateError
    };
}