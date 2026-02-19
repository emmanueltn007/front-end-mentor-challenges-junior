import { FormProvider } from "./hooks/FormContext";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
 

  return ( 
    <FormProvider>
      <main className="min-h-screen w-screen md:flex md:items-center bg-[hsl(202,86%,94%)]">
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:w-2/3 md:mx-auto md:rounded-xl md:overflow-hidden bg-[hsl(0,0%,100%)]">
          <LeftSide />
          <RightSide />
        </div>
      </main>
    </FormProvider>
  );
}

export default App