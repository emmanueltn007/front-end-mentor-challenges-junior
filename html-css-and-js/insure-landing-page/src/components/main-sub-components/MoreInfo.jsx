function MoreInfo () {
    return (
        <section className="bg-[hsl(256,26%,20%)] bg-[url('/images/bg-pattern-how-we-work-mobile.svg')] md:bg-[url('/images/bg-pattern-how-we-work-desktop.svg')] bg-contain bg-no-repeat bg-right text-[hsl(0,0%,98%)] mx-8 md:mx-16 lg:mx-32 flex flex-col md:grid md:grid-cols-2 gap-8 px-8 md:px-16 py-16 my-32">
            <h1 className="text-5xl font-bold max-md:text-center">Find Out More About How We Work</h1>
            <button className="text-lg md:text-md lg:text-sm border-2 border-[hsl(0,0%,98%)] hover:text-[hsl(256,26%,20%)] hover:bg-[hsl(0,0%,98%)] self-start py-2 px-6 font-semibold cursor-pointer transition-all duration-300 ease-in-out md:w-1/2 md:ml-auto md:my-auto max-md:mx-auto">HOW WE WORK</button>
        </section>
    );
}

export default MoreInfo