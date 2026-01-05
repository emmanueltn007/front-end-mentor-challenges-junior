import Header from "./components/Header";
import Main from "./components/Main";

function App () {
    return (
        <div className="md:flex md:flex-col md:gap-8 py-8 px-4 md:px-16 md:py-12 w-screen">
            <Header />
            <Main />
        </div>
    );
}

export default App