function Form () {
  return (
    <div className="text-[hsl(234,29%,20%)] font-['Roboto',sans-serif] md:row-start-1 py-8 px-4 flex flex-col gap-4">
      <h1 className="text-4xl md:text-6xl font-bold">
        Stay updated!
      </h1>
      <p>
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <form className="flex flex-col">
        <label 
          htmlFor="email-input"
          className="text-xs font-bold"
        >
          Email address
        </label>
        <input 
          type="email" 
          id="email-input" 
          placeholder="email@company.com"
          className="border border-[hsl(0,0%,58%)] py-3 pl-4 rounded-md mt-2 outline-none"
        />
        <button 
          className="bg-[hsl(234,29%,20%)] text-[hsl(0,0%,100%)] font-bold py-3 rounded-md mt-4 cursor-pointer"
          type="submit"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

export default Form