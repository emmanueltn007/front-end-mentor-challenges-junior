import { FormProvider } from "./hooks/FormContext";
import FormCard from "./components/FormCard";
import ResultsDisplayCard from "./components/ResultsDisplayCard";

function App() {
 

  return ( 
    <FormProvider>
      <main className="font-['Plus Jarkata Sans',sans-serif] flex flex-col md:flex-row">
          <FormCard />
          <ResultsDisplayCard />
      </main>
    </FormProvider>
  );
}

export default App