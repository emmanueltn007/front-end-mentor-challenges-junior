import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App () {

    const [isDark, setIsDark] = useState(false);

    function handleDarkModeToggle () {
        setIsDark(prev => !prev)
    }

    return (
        <div className="p-4">
            <Header isDark={isDark} handleDarkModeToggle={handleDarkModeToggle} />
            <Main />
        </div>
    );
}

export default App