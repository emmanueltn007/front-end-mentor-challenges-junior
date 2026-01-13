function Intro () {
    return (
        <section className="flex flex-col items-center gap-8 px-8 md:px-40">
            <div>
                <img src="/images/illustration-intro.png" alt="illustration intro" />
            </div>
            <div className="text-[hsl(0,0%,100%)] text-center flex flex-col items-center gap-8">
                <h1 className="text-5xl md:text-4xl font-semibold">
                    All your files in one secure location, accessible anywhere.
                </h1>
                <p className="text-xl md:text-md">
                    Fylo stores all your most important files in one secure location. Access them wherever you need,
                    share and collaborate with friends, family, and co-workers.
                </p>
                <button className="bg-[hsl(198,60%,50%)] text-xl font-semibold md:text-md py-3 
                                   max-md:w-[80%] md:px-16 rounded-4xl hover:bg-[hsl(176,68%,64%)] cursor-pointer transition 
                                   duration-300 ease-in-out">
                    Get Started
                </button>
            </div>
        </section>
    );
}

export default Intro