import Header from "./components/Header";

function App () {
  return (
    <div className="min-h-screen w-screen">
      <div className="bg-[url('/images/mobile/image-hero.jpg')] md:bg-[url('/images/desktop/image-hero.jpg')]">
        <Header />
      </div>
      
    </div>
  );
}

export default App