import Logo from "./Logo";

function Header({ isDark, toggleDarkMode }) {

  const headerBg = isDark ? "bg-[hsl(225,23%,24%)]" : "bg-[hsl(0,0%,100%)]";

  return (
    <header
      className={`flex items-center justify-between p-4 rounded-md shadow-sm shadow-[hsl(226,11%,37%)] transition-all duration-300 ${headerBg}`}
    >
      <Logo isDark={isDark} />

      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className={`p-2 rounded-md cursor-pointer ${isDark ? "bg-[hsl(226,11%,37%)]" : "bg-[hsl(0,0%,78%)]"}`}
      >
        <img
          src={isDark ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
          alt={isDark ? "Switch to light mode" : "Switch to dark mode"}
        />
      </button>
    </header>
  );
}

export default Header;
