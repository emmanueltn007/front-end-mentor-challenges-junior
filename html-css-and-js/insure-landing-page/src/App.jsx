import { useState } from "react";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [yearErrorMessage, setYearErrorMessage] = useState("");
  const [monthErrorMessage, setMonthErrorMessage] = useState("");
  const [dayErrorMessage, setDayErrorMessage] = useState("");
  const [userYears, setUserYears] = "--";
  const [userMonths, setUserMonths] = "--";
  const [userDays, setUserDays] = "--";

  const userDayInput = Number(day);
  const userMonthInput = Number(month);
  const userYearInput = Number(year);

  // DATE DECLARATIONS
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  function calculateAge() {

    // YEAR CONDITIONALS
    if (!userYearInput) {
      setYearErrorMessage("This field is required");
      return
    } else if (userYearInput > currentYear) {
      setYearErrorMessage("Must be in the past");
      return;
    } else {
      setYearErrorMessage("");
    }

    // MONTH CONDITIONALS
    if (!userMonthInput) {
      setMonthErrorMessage("This field is required");
      return;
    } else if (userMonthInput > 12 || userMonthInput < 1) {
      setMonthErrorMessage("Must be a valid month");
      return;
    } else {
      setMonthErrorMessage("");
    }

    // DAY CONDITIONALS
    if (!userDayInput) {
      setDayErrorMessage("This field is required");
    } else if (userDayInput < 1 || userDayInput > 31) {
      setDayErrorMessage("Must be a valid day");
      return;
    } else {
      setDayErrorMessage("");
    }

    console.log(`${currentDay} : ${currentMonth} : ${currentYear}`);
    if (userMonthInput > currentMonth) {
      console.log("Age:", (currentYear - userYearInput) -1);
    } else {
    setUserYears("Age:", currentYear - userYearInput);
    }
  }

  return (
    <div className="h-screen bg-[hsl(0,0%,86%)]">
      <div className="flex flex-col gap-8 bg-[hsl(0,0%,100%)] px-8 py-16 md:py-8 w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded-br-[128px] rounded-bl-4xl rounded-t-4xl">
        <div className="grid grid-cols-3 gap-4 md:w-4/5">
          <div className="flex flex-col gap-2">
            <label htmlFor="day-input" className={`font-semibold ${dayErrorMessage ? "text-[hsl(0,100%,67%)]" : "text-[hsl(0,0%,0%)]"}`}>
              DAY
            </label>
            <input
              className="text-xl font-bold border border-[hsl(0,1%,44%)] p-4 rounded-md outline-none"
              type="text"
              id="day-input"
              placeholder="DD"
              onChange={(e) => setDay(e.target.value)}
              value={day}
            />
            {dayErrorMessage && (
              <p className="text-sm text-[hsl(0,100%,67%)] italic">
                {dayErrorMessage}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="day-input" className={`font-semibold ${monthErrorMessage ? "text-[hsl(0,100%,67%)]" : "text-[hsl(0,0%,0%)]"}`}>
              MONTH
            </label>
            <input
              className="text-xl font-bold border border-[hsl(0,1%,44%)] p-4 rounded-md outline-none"
              type="text"
              id="month-input"
              placeholder="MM"
              onChange={(e) => setMonth(e.target.value)}
              value={month}
            />
            {monthErrorMessage && (
              <p className="text-sm text-[hsl(0,100%,67%)] italic">
                {monthErrorMessage}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="day-input" className={`font-semibold ${yearErrorMessage ? "text-[hsl(0,100%,67%)]" : "text-[hsl(0,0%,0%)]"}`}>
              YEAR
            </label>
            <input
              className="text-xl font-bold border border-[hsl(0,1%,44%)] p-4 rounded-md outline-none"
              type="text"
              id="year-input"
              placeholder="YYYY"
              onChange={(e) => setYear(e.target.value)}
              value={year}
            />
            {yearErrorMessage && (
              <p className="text-sm text-[hsl(0,100%,67%)] italic">
                {yearErrorMessage}
              </p>
            )}
          </div>
        </div>
        <div className="relative md:w-9/10">
          <hr />
          <button className="cursor-pointer absolute -translate-y-1/2 max-md:left-1/2 md:right-8 md:translate-x-full -translate-x-1/2 rounded-full overflow-hidden" onClick={calculateAge}>
            <img
              src="/assets/images/icon-arrow.svg"
              alt="arrow icon"
              className="bg-[hsl(259,100%,65%)] p-2"
            />
          </button>
        </div>
        <div>
          <h1 className="text-7xl font-bold italic flex gap-4">
            <span className="text-[hsl(259,100%,65%)]">{userYears}</span>
            years
          </h1>
          <h1 className="text-7xl font-bold italic flex gap-4">
            <span className="text-[hsl(259,100%,65%)]">{userMonths}</span>
            months
          </h1>
          <h1 className="text-7xl font-bold italic flex gap-4">
            <span className="text-[hsl(259,100%,65%)]">{userDays}</span>
            days
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
