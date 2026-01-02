function SignUp () {
    return (
        <section className="text-center flex flex-col gap-8 py-32">
            <h1 className="text-white text-3xl md:text-5xl font-semibold">
                A modern publishing platform
            </h1>
            <p className="text-white">
                Grow your audience and build your online brand
            </p>
            <div className="grid grid-cols-2 md:flex justify-center gap-4 font-semibold max-md:w-full">
                <button 
                    className="bg-white text-[hsl(356,100%,66%)] py-2 md:px-10 rounded-3xl cursor-pointer
                                hover:text-white hover:bg-[rgba(168,168,168,0.5)] hover:backdrop-blur-2xl transition-all duration-150 ease-in-out"
                >
                    Sign Up
                </button>
                <button 
                    className="text-white border border-white py-2 md:px-6 rounded-3xl cursor-pointer
                                hover:bg-white hover:text-[hsl(356,100%,66%)] transition-all duration-150 ease-in-out"
                    >
                    Learn More
                </button>
            </div>
        </section>
    );
}

export default SignUp