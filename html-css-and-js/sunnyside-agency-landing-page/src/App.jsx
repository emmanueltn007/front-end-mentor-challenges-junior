import CreativesSection from "./components/CreativesSection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import PhotographyGraphicDesign from "./components/Photography&GraphicDesign";
import Testimonials from "./components/Testimonials";
import FeaturesMain from "./FeaturesMain";

function App() {
  return (
    <>
      <div 
        className="min-h-125 bg-[url('/images/mobile/image-header.jpg')] md:bg-[url('/images/desktop/image-header.jpg')] bg-center bg-no-repeat
                    bg-cover">
        <Header />
        <CreativesSection />
      </div>
      <FeaturesMain />
      <PhotographyGraphicDesign />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
