import { Route, Routes } from "react-router";
import Container from "./components/Container";
import SuccessPage from "./components/SuccessPage";

function App () {
  return (
    <div className="h-screen w-screen bg-[hsl(235,18%,26%)] md:p-16 lg:px-32 flex md:items-center md:justify-center">
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default App