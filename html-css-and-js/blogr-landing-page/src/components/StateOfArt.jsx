function StateOfArt() {
  return (
    <section 
        className="text-white bg-[hsl(208,49%,24%)] bg-[url('/images/bg-pattern-circles.svg')] bg-top md:bg-top-left bg-cover 
                    bg-no-repeat rounded-bl-4xl rounded-tr-4xl flex flex-col md:flex-row">
      <div>
        <img src="/images/illustration-phones.svg" alt="illustration phones image" />
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
