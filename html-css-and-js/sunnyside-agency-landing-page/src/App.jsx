import CreativesSection from "./components/CreativesSection";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div 
        className="bg-[url('/images/mobile/image-header.jpg')] md:bg-[url('/images/desktop/image-header.jpg')] bg-center bg-no-repeat
                    bg-cover">
        <Header />
        <CreativesSection />
      </div>
    </>
  );
}

export default App;
