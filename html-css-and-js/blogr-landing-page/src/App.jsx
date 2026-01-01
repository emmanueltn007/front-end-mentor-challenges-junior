import DesignedForFuture from "./components/DesignedForFuture";
import Header from "./components/Header";
import SignUp from "./components/SignUp";

function App () {
  return (
    <div className="">
      <div className="pt-16 px-8 bg-[hsl(356,100%,66%)] bg-[url('/images/bg-pattern-intro-mobile.svg')] bg-center bg-no-repeat bg-cover">
        <Header />
        <SignUp />
      </div>
      
      <DesignedForFuture />
    </div>
  );
}

export default App