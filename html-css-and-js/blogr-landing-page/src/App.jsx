import DesignedForFuture from "./components/DesignedForFuture";
import Features from "./components/Features";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import StateOfArt from "./components/StateOfArt";

function App() {
  return (
    <div className="">
      <div className="pt-16 px-8 bg-[hsl(356,100%,66%)] bg-[url('/images/bg-pattern-intro-mobile.svg')] bg-center bg-no-repeat bg-cover
                      rounded-bl-4xl">
        <Header />
        <SignUp />
      </div>

      <DesignedForFuture />
      <StateOfArt />
      <Features />
    </div>
  );
}

export default App;
