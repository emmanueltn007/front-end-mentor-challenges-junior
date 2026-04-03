import { FormProvider } from "./hooks/FormContext";
import FormCard from "./components/FormCard";
import ResultsDisplayCard from "./components/ResultsDisplayCard";

function App() {
 

  return ( 
    <FormProvider>
      <main>
        <div>
          <FormCard />
          <ResultsDisplayCard />
        </div>
      </main>
    </FormProvider>
  );
}

export default App