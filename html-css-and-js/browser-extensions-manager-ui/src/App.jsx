import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App () {

    // useStates for toggling dark and light mode
    const [isDark, setIsDark] = useState(false);

    // function to handle dark and light mode toggle
    function handleDarkModeToggle () {
        setIsDark(prev => !prev)
    }

    return (
        <div className="flex flex-col gap-8 md:gap-12 px-4 py-4 md:px-24 md:py-8">
            <Header isDark={isDark} handleDarkModeToggle={handleDarkModeToggle} />
            <Main isDark={isDark} />
        </div>
    );
}

export default App