import CreativesSection from "./components/CreativesSection";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import PhotographyGraphicDesign from "./components/Photography&GraphicDesign";
import StandOut from "./components/StandOut";
import Testimonials from "./components/Testimonials";
import Transform from "./components/Transform";

function App() {
  return (
    <>
      <div 
        className="bg-[url('/images/mobile/image-header.jpg')] md:bg-[url('/images/desktop/image-header.jpg')] bg-center bg-no-repeat
                    bg-cover">
        <Header />
        <CreativesSection />
      </div>
      <Transform />
      <StandOut />
      <PhotographyGraphicDesign />
      <Testimonials />
      <Gallery />
    </>
  );
}

export default App;
