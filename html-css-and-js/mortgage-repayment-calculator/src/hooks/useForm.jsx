import { useState } from "react";

export function useForm () {
        // useStates
        const [resultsText, setResultsText] = useState("Results Shown Here");
        const [mortgageAmount, setMortgageAmount] = useState("");
        const [mortgageTerm, setMortgageTerm] = useState("");
        const [interestRate, setInterestRate] = useState("");
        const [mortgageType, setMortgageType] = useState("")

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

            // Radio Buttons Conditionals
            if (mortgageType === "repayment") console.log("Repayment is selected");
            if (mortgageType === "interest-only") console.log("Interest-only is selected");

            const mortgageTermCalculation = mortgageTermInput * 12;
            const interestRateCalculation  = interestRateInput / 12;

            const monthlyRepaymentPart1 = mortgageAmountInput * interestRateCalculation;
            const monthlyRepaymenPart2 = ((1 + interestRateCalculation) ** mortgageTermCalculation);
            const monthlyRepaymenPart3 = (1 + interestRateCalculation) ** (mortgageTermCalculation -1);

            const monthlyRepayment = monthlyRepaymentPart1 * (monthlyRepaymenPart2 / monthlyRepaymenPart3);

            const totalRepayment = monthlyRepayment * mortgageTermCalculation;

        
            console.log(mortgageTermCalculation);
            console.log(interestRateCalculation);
            console.log(monthlyRepayment);
            console.log(totalRepayment);
        }

    return {
        resultsText,
        setResultsText,
        mortgageAmount, 
        setMortgageAmount, 
        mortgageTerm, 
        setMortgageTerm, 
        interestRate, 
        setInterestRate, 
        calculateRepayments,
        mortgageType,
        setMortgageType
    };
}