import DesignedForFuture from "./components/DesignedForFuture";
import Features from "./components/Features";
import Footer from "./components/Footer"
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import StateOfArt from "./components/StateOfArt";

function App() {
  return (
    <div className="flex flex-col gap-16 overflow-hidden">
      <div className="pt-16 px-8 md:px-32 rounded-bl-[128px]
                      bg-[url('/images/bg-pattern-intro-mobile.svg'),linear-gradient(90deg,_hsl(13,100%,72%),_hsl(353,100%,62%))]
    md:bg-[url('/images/bg-pattern-intro-desktop.svg'),linear-gradient(90deg,hsl(13,100%,72%),hsl(353,100%,62%))]
    bg-center bg-no-repeat
    bg-cover"
      >
        <Header />
        <SignUp />
      </div>

      <DesignedForFuture />
      <StateOfArt />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
