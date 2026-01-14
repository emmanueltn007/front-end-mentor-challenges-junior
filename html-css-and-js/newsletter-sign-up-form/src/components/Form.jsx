import items from "../utilities/listItems";

function Form () {
  return (
    <div className="text-[hsl(235,18%,26%)] flex flex-col gap-4 md:row-start-1 md:col-start-1 max-md:p-4 md:justify-center md:px-8">
      <h1 className="text-3xl font-bold">
        Stay updated!
      </h1>
      <p className="">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul>
        {items.map((item) => {
          return (
            <li 
              key={item}
              className="relative pl-8 before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-[url('/assets/images/icon-list.svg')] before:bg-contain before:bg-no-repeat"
            >
              {item}
            </li>
          );
        })}
      </ul>
      <form className="flex flex-col">
        <label 
          htmlFor="email-input"
          className="font-semibold text-xs"
        >
          Email address
        </label>
        <input 
          className="border border-[hsl(0,0%,58%)] rounded-md py-2 px-4 mt-1"
          type="email" 
          id="email-input" 
          placeholder="email@company.com"
        />
        <button
          type="submit"
          className="bg-[hsl(235,18%,26%)] text-[hsl(0,0%,100%)] font-semibold p-4 rounded-md cursor-pointer mt-4 hover:bg-[linear-gradient(90deg,hsl(4,100%,67%),hsl(17,100%,66%))] hover:shadow-lg hover:shadow-[hsl(4,100%,67%)] transition-all duration-300 ease-in-out"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

export default Form