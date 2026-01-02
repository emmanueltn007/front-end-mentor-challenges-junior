function StateOfArt() {
  return (
    <section 
        className="text-white bg-[hsl(208,49%,24%)] bg-[url('/images/bg-pattern-circles.svg')] bg-top md:bg-top-left bg-[length:500px_500px] md:bg-[length:600px_600px]
                    bg-no-repeat rounded-bl-[128px] rounded-tr-[128px] flex flex-col md:grid md:grid-cols-2 relative pb-32 pt-64 md:py-16 mt-56 md:mt-32">
      <div className="">
        <img className="max-w-md absolute top-0 max-md:left-1/2 max-md:-translate-x-1/2 md:top-1/2 md:translate-x-1/4 -translate-y-1/2 md:-translate-y-1/2" src="/images/illustration-phones.svg" alt="illustration phones image" />
      </div>
      <div className="max-md:text-center flex flex-col gap-4 px-8">
        <h1 className="text-4xl font-semibold">
          State of the Art Infrastructure
        </h1>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </section>
  );
}

export default StateOfArt;
