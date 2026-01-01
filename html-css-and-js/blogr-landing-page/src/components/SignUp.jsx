function SignUp () {
    return (
        <section className="text-center flex flex-col gap-4">
            <h1 className="text-white text-3xl">
                A modern publishing platform
            </h1>
            <p className="text-white">
                Grow your audience and build your online brand
            </p>
            <div className="grid grid-cols-2 justify-center gap-4 font-semibold w-full">
                <button className="bg-white text-[hsl(356,100%,66%)] py-2 rounded-3xl cursor-pointer">
                    Sign Up
                </button>
                <button className="text-white border border-white py-2 rounded-3xl cursor-pointer">
                    Learn More
                </button>
            </div>
        </section>
    );
}

export default SignUp