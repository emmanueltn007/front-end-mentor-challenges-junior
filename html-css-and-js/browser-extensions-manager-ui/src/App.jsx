import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App () {

    const [isDark, setIsDark] = useState(false);

    function handleDarkModeToggle () {
        setIsDark(prev => !prev)
    }

    return (
        <div className="px-4 py-4 md:px-24 md:py-8">
            <Header isDark={isDark} handleDarkModeToggle={handleDarkModeToggle} />
            <Main />
        </div>
    );
}

export default App