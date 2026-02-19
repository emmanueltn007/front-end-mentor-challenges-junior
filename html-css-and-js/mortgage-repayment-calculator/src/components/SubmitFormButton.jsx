function SubmitFormButton () {
    return (
        <button type="submit" className="flex justify-center gap-2 bg-[hsl(61,70%,52%)] hover:bg-[hsl(61,100%,78%)] transition duration-300 ease-in-out py-2 font-semibold text-[hsl(202,55%,16%)] rounded-3xl w-full cursor-pointer">
            <img src="/assets/images/icon-calculator.svg" alt="calculator icon" />
            Calculate Repayments
        </button>
    );
}

export default SubmitFormButton