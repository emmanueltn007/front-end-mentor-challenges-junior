function BrightFuture() {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <img className="md:hidden" src="/assets/images/image-web-3-mobile.jpg" alt="web-3 image" />
        <img className="max-md:hidden h-full" src="/assets/images/image-web-3-desktop.jpg" alt="web-3 image" />
      </div>
      <div className="md:grid md:grid-cols-2 ">
        <h1 className="text-5xl font-bold">
            The Bright Future of Web 3.0?
        </h1>
        <div className="flex flex-col md:justify-between md:px-2">
          <p className="text-[hsl(236,13%,42%)] text-sm">
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
            But is it really fulfilling its promise?
          </p>
          <button 
            className="text-sm cursor-pointer bg-[hsl(5,85%,63%)] hover:bg-[hsl(240,100%,5%)] hover:text-white
                      font-semibold self-start py-2 px-6 transition-all duration-300 ease-in-out tracking-[0.2em]">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}

export default BrightFuture;
