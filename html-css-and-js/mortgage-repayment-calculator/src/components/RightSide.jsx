function RightSide ({ resultsText, resultsParagraph, resultsContainer, monthlyRepayments, totalRepayment }) {
    return (
        <div className="bg-[hsl(202,55%,16%)] md:rounded-bl-[64px] py-8 px-4 text-center flex flex-col items-center">
            <img src="/assets/images/illustration-empty.svg" alt="illustration image" />
            <h1 className="text-[hsl(0,0%,100%)] font-semibold text-2xl">
                {resultsText}
            </h1>
            <p className="text-[hsl(203,41%,72%)] font-semibold">
                {resultsParagraph}
            </p>
            {resultsContainer && (
                <div 
                    className="overflow-hidden bg-[hsl(201,56%,10%)] flex flex-col gap-4 p-4 rounded-md relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-[hsl(61,70%,52%)]">
                    <div className="flex flex-col gap-2">
                        <span 
                            className="text-[hsl(203,41%,72%)]"
                        >
                            Your monthly repayments
                        </span>
                        <span 
                            className="text-4xl text-[hsl(61,70%,52%)] font-semibold"
                        >
                            £{monthlyRepayments}
                        </span>
                    </div>

                    <hr className="border-t-gray-400" />

                    <div className="flex flex-col gap-2">
                        <span 
                            className="text-[hsl(203,41%,72%)]"
                        >
                            Total you'll repay over the term
                        </span>
                        <span 
                            className="text-[hsl(0,0%,100%)] text-xl font-semibold"
                        >
                            £{totalRepayment}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RightSide