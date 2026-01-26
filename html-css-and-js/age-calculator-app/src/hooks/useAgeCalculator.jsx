import { useState } from "react";

export function useAgeCalculator() {

    const [date, setDate] = useState({ year: "", month: "", day: "" });
  const [errors, setErrors] = useState({});
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });

  function calculateAge() {
    // DATE DECLARATIONS
    const today = new Date();

    const day = Number(date.day);
    const month = Number(date.month);
    const year = Number(date.year);

    const newErrors = {};

    // YEAR
    if (!year) newErrors.year = "This field is required";
    else if (year > today.getFullYear()) newErrors.year = "Must be in the past";

    // MONTH
    if (!month) newErrors.month = "This field is required";
    else if (month < 1 || month > 12) newErrors.month = "Must be a valid month";

    // DAY
    if (!day) newErrors.day = "This field is required";
    else if (day < 1 || day > 31) newErrors.day = "Must be a valid day";

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

    return {
        date,
        setDate,
        errors,
        age,
        calculateAge
    };
}