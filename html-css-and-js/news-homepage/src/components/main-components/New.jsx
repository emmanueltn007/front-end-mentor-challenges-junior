import newItems from "../../utilities/newData";

function New() {
  return (
    <section className="bg-[hsl(240,100%,5%)] flex flex-col gap-4 px-4 py-8">
      <h2 className="text-[hsl(35,77%,62%)] text-3xl font-semibold">New</h2>
      <div className="text-white flex flex-col h-full">
        {newItems.map((item, index) => {
          return (
            <div className="flex flex-col gap-4" key={item.id}>
              <h3 className="cursor-pointer text-md font-bold hover:text-[hsl(35,77%,62%)] transition duration-300 ease-in-out">
                {item.heading}
              </h3>
              <p className="text-sm">{item.description}</p>

              {index !== item.length - 1 && (
                <hr className="my-4 border-white" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default New;
