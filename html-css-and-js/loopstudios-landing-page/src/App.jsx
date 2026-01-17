import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";

function App () {
  return (
    <div className="min-h-screen w-screen">
      <div className="bg-[url('/images/mobile/image-hero.jpg')] md:bg-[url('/images/desktop/image-hero.jpg')] bg-center bg-no-repeat bg-size-cover">
        <Header />
        <Hero />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App