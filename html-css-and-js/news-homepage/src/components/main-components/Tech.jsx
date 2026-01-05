import techItems from "../../utilities/techData";
function Tech() {
  console.log(techItems);

  return (
    <section className="flex flex-col md:grid md:grid-cols-3 gap-4">
      {techItems.map((item) => {
        return (
          <div className="grid grid-cols-[1fr_2fr] gap-2" key={item.index}>
            <div>
              <img className="h-40 w-auto" src={item.image} alt="tech images" />
            </div>
            <div className="flex flex-col justify-between py-2">
              <span className="text-[hsl(5,85%,63%)] text-4xl font-semibold">
                {item.index}
              </span>
              <span className="text-[hsl(240,100%,5%)] text-xl font-extrabold cursor-pointer hover:text-[hsl(5,85%,63%)] transition duration-300 ease-in-out">
                {item.heading}
              </span>
              <p className="text-sm text-[hsl(236,13%,42%)]">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Tech;
