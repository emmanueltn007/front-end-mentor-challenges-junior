function Intro () {
    return (
        <section className="grid max-md:grid-rows-2 md:grid-cols-2 bg-[hsl(256,26%,20%)] md:p-16 lg:p-32 relative z-10">
            <div className="h-full w-full md:col-start-2">
                <img className="md:hidden object-cover h-full w-full" src="/images/image-intro-mobile.jpg" alt="intro image" />
                <img className="max-md:hidden object-cover lg:absolute lg:right-32 lg:-translate-y-1/4 lg:top-2/5 lg:w-2/5" src="/images/image-intro-desktop.jpg" alt="intro image" />
            </div>
            <div className="text-[hsl(0,0%,98%)] max-md:text-center flex flex-col gap-6 justify-center max-md:px-8 md:row-start-1">
                <h1 className="text-5xl font-bold">
                    Humanizing your insurance.
                </h1>
                <p>
                    Get your life insurance coverage easier and faster. 
                    We blend our expertise and technology to help you find the plan that's right for you.
                    Ensure you and your loved ones are protected.
                </p>
                <button className="border-2 border-[hsl(0,0%,98%)] font-semibold py-2 px-6 self-start max-md:mx-auto cursor-pointer hover:bg-[hsl(0,0%,98%)] hover:text-[hsl(256,26%,20%)] transition-all duration-300 ease-in-out">
                    VIEW PLANS
                </button>
            </div>
        </section>
    );
}

export default Intro