import Header from "./components/Header";
import Hero from "./components/Hero";

function App () {
  return (
    <div className="min-h-screen w-screen">
      <div className="bg-[url('/images/mobile/image-hero.jpg')] md:bg-[url('/images/desktop/image-hero.jpg')] bg-center bg-no-repeat bg-size-[100%,100%]">
        <Header />
        <Hero />
      </div>
      
    </div>
  );
}

export default App