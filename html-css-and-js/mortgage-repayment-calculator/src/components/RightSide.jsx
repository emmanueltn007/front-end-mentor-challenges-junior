function RightSide ({ resultsText }) {
    return (
        <div className="bg-[hsl(202,55%,16%)] md:rounded-bl-[64px] py-8 px-4 text-center flex flex-col items-center">
            <img src="/assets/images/illustration-empty.svg" alt="illustration image" />
            <h1 className="text-[hsl(0,0%,100%)] font-semibold text-2xl">
                {resultsText}
            </h1>
            <p className="text-[hsl(203,41%,72%)] font-semibold">
                Complete the form and click "calculate repayments" to see what your monthly repayments would be.
            </p>
        </div>
    );
}

export default RightSide