import Header from "./components/Header";
import SignUp from "./components/SignUp";

function App () {
  return (
    <div 
      className="px-8 py-16 bg-[hsl(356,100%,66%)] bg-[url('/images/bg-pattern-intro-mobile.svg')] bg-center bg-no-repeat bg-cover">
      <Header />
      <SignUp />
    </div>
  );
}

export default App