import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [date, setDate] = useState({ year: "", month: "", day: "" });
  const [errors, setErrors] = useState({});
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });

  // DATE DECLARATIONS
  const today = new Date();

  function calculateAge() {
    const day = Number(date.day);
    const month = Number(date.month);
    const year = Number(date.year);

    const newErrors = {};

    // YEAR
    if (!year) newErrors.year = "This field is required";
    else if (year > today.getFullYear()) newErrors.year = "Must be in the past";

    // MONTH
    if (!month) newErrors.month = "This field is required";
    else if (month < 1 || month > 12) newErrors.month = "invalid month";

    // DAY
    if (!day) newErrors.day = "This field is required";
    else if (day < 1 || day > 31) newErrors.day = "Invalid day";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // AGE CALCULATIONS
    const birthDate = new Date(year, month - 1, day);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  }

  return (
    <div className="h-screen bg-[hsl(0,0%,86%)] flex items-center justify-center">
      <div className="flex flex-col gap-8 bg-[hsl(0,0%,100%)] px-8 py-16 md:py-8 w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded-br-[128px] rounded-bl-4xl rounded-t-4xl">
        
        <Form date={date} setDate={setDate} errors={errors} calculateAge={calculateAge} />

        <div>
          {["years", "months", "days"].map((unit) => (
            <h1 className="text-7xl font-bold italic flex gap-4">
              <span className="text-[hsl(259,100%,65%)]">{age[unit]}</span>
              {unit}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
