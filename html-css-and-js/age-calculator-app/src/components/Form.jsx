function Form ({ errors, date, setDate, calculateAge }) {
    return (
        <form 
          noValidate
          className="flex flex-col gap-16" 
          onSubmit={(e) => {
            e.preventDefault();
            calculateAge();
          }}
        >
          <div className="grid grid-cols-3 gap-4 md:w-4/5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="day-input"
                className={`font-semibold ${errors.day ? "text-[hsl(0,100%,67%)]" : "text-[hsl(0,0%,0%)]"}`}
              >
                DAY
              </label>
              <input
                className={`text-xl font-bold border focus:border-[hsl(259,100%,65%)] caret-[hsl(259,100%,65%)] p-4 rounded-md outline-none ${errors.day ? "border-[hsl(0,100%,67%)]" : "hsl(0,100%,67%)"}`}
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                min="1"
                max="31"
                id="day-input"
                placeholder="DD"
                onChange={(e) => setDate({ ...date, day: e.target.value })}
                value={date.day}
              />
              {errors.day && (
                <p className="text-sm text-[hsl(0,100%,67%)] italic">
                  {errors.day}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="day-input"
                className={`font-semibold ${errors.month ? "text-[hsl(0,100%,67%)]" : "text-[hsl(0,0%,0%)]"}`}
              >
                MONTH
              </label>
              <input
                className={`text-xl font-bold border focus:border-[hsl(259,100%,65%)] caret-[hsl(259,100%,65%)] p-4 rounded-md outline-none ${errors.month ? "border-[hsl(0,100%,67%)]" : "hsl(0,100%,67%)"}`}
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                min="1"
                max="12"
                id="month-input"
                placeholder="MM"
                onChange={(e) => setDate({ ...date, month: e.target.value })}
                value={date.month}
              />
              {errors.month && (
                <p className="text-sm text-[hsl(0,100%,67%)] italic">
                  {errors.month}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="day-input"
                className={`font-semibold ${errors.year ? "text-[hsl(0,100%,67%)]" : "text-[hsl(0,0%,0%)]"}`}
              >
                YEAR
              </label>
              <input
                className={`text-xl font-bold border focus:border-[hsl(259,100%,65%)] caret-[hsl(259,100%,65%)] p-4 rounded-md outline-none ${errors.year ? "border-[hsl(0,100%,67%)]" : "hsl(0,100%,67%)"}`}
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                min="1"
                id="year-input"
                placeholder="YYYY"
                onChange={(e) => setDate({ ...date, year: e.target.value })}
                value={date.year}
              />
              {errors.year && (
                <p className="text-sm text-[hsl(0,100%,67%)] italic">
                  {errors.year}
                </p>
              )}
            </div>
          </div>

          <div className="relative md:w-[90%]">
            <hr />
            <button
              type="submit"
              className="cursor-pointer absolute -translate-y-1/2 max-md:left-1/2 md:right-8 md:translate-x-full -translate-x-1/2 rounded-full overflow-hidden"
            >
              <svg className="bg-[hsl(259,100%,65%)] text-[hsl(259,100%,65%)] hover:text-black hover:bg-black transition-all duration-300 ease-in-out p-2" xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="currentColor" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" fill="currentColor"/></g></svg>
            </button>
          </div>
        </form>
    );
}

export default Form