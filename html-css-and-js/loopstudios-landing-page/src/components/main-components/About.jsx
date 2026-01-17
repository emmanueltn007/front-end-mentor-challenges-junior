function About () {
  return (
    <section className="px-8 md:px-24 pt-32 pb-12 md:py-12 max-md:flex max-md:flex-col max-md:gap-16 relative">
      <div className="lg:w-2/3">
        <img className="md:hidden" src="/images/mobile/image-interactive.jpg" alt="about interactive image" />
        <img className="max-md:hidden w-full" src="/images/desktop/image-interactive.jpg" alt="about interactive image" />
      </div>
      <div className="max-md:text-center flex flex-col gap-4 md:gap-8 md:absolute md:top:1/2 right-24 md:w-1/3 lg:w-2/5 md:-translate-y-full md:bg-[hsl(0,0%,100%)] md:pt-8 lg:pt-16 md:pl-8 lg:pl-16">
        <h2 className="text-4xl lg:text-6xl font-light">
          THE LEADER IN INTERACTIVE VR
        </h2>
        <p className="font-semibold text-gray-500 md:text-xl">
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe.
          Our award-winning creations have transformed businesses through digital experiences that bind to their brand
        </p>
      </div>
    </section>
  );
}

export default About