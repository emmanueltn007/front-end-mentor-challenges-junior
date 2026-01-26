import Form from "./components/Form";
import { useAgeCalculator } from "./hooks/useAgeCalculator";

function App() {
  
  const {date, setDate, errors, calculateAge, age} = useAgeCalculator();

  return (
    <div className="h-screen bg-[hsl(0,0%,86%)] flex items-center justify-center">
      <div className="flex flex-col gap-8 bg-[hsl(0,0%,100%)] px-8 py-16 md:py-8 w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded-br-[128px] rounded-bl-4xl rounded-t-4xl shadow-lg shadow-gray-500">
        <Form
          date={date}
          setDate={setDate}
          errors={errors}
          calculateAge={calculateAge}
        />

        <div>
          {["years", "months", "days"].map((unit) => (
            <h1 key={unit} className="text-7xl font-bold italic flex gap-4">
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
