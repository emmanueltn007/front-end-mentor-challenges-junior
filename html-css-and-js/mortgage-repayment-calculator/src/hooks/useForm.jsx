import { useState } from "react";

export function useForm () {
    // useStates
    const [mortgageAmount, setMortgageAmount] = useState("");
    const [mortgageTerm, setMortgageTerm] = useState("");
    const [interestRate, setInterestRate] = useState("");

    const P = Number(mortgageAmount);
    const n = Number(mortgageTerm);
    const i = (Number(interestRate) / 100) / 12;

    const handleCalculations = (e) => {
        e.preventDefault();
        console.log(`Mortgage Amount is $${P}`);
        console.log(`Mortgage Term is ${n} years`);
        console.log(`The interest rate is ${i}% per annum`);

        setTimeout(() => {
            console.log("Form is submitted!");
        }, 2000);
    }
    return {
        handleCalculations,
        mortgageAmount,
        setMortgageAmount,
        mortgageTerm,
        setMortgageTerm,
        interestRate,
        setInterestRate
    };
}