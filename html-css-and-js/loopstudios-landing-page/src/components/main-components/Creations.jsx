import gridItems from "../../utilities/creations";

function Creations() {
  return (
    <section className="px-8 md:px-24 py-16 md:py-12 flex flex-col gap-16">
      <div className="flex justify-between">
        <h2 className="text-4xl lg:text-6xl font-light max-md:mx-auto">OUR CREATIONS</h2>
        <button className="hidden text-2xl lg:block border border-[hsl(0,0%,0%)] py-2 px-6 tracking-[0.25rem] cursor-pointer hover:bg-[hsl(0,0%,0%)] hover:text-[hsl(0,0%,100%)] transition-all duration-300 ease-in-out">
          SEE ALL
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {gridItems.map(({ title, mobile_bg, desktop_bg }) => {
          return (
            <div key={title} className="group relative cursor-pointer hover:opacity-50 transition-all duration-300 ease-in-out">
              <h3 className="absolute uppercase bottom-8 left-8 md:right-16 z-50 text-[hsl(0,0%,85%)] text-3xl md:text-2xl lg:text-3xl font-light group-hover:text-[hsl(0,0%,0%)] transition-colors duration-300">
                {title}
              </h3>
              <img className="lg:hidden z-10" src={mobile_bg} alt="grid item" />
              <img
                className="hidden lg:block w-full z-10"
                src={desktop_bg}
                alt="grid item"
              />
            </div>
          );
        })}
      </div>
      <button className="lg:hidden border border-[hsl(0,0%,0%)] py-2 px-6 tracking-[0.25rem] cursor-pointer mx-auto hover:bg-[hsl(0,0%,0%)] hover:text-[hsl(0,0%,100%)] transition-all duration-300 ease-in-out">
        SEE ALL
      </button>
    </section>
  );
}

export default Creations;
