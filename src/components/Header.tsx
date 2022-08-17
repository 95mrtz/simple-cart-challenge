import {useState} from "react";
import {IoMoon, IoSunnyOutline} from "react-icons/io5";

const Header = (): JSX.Element => {
  const [isDark, setIsDark] = useState(true);
  const root = window.document.documentElement;

  const handleTheme = () => {
    isDark ? root.classList.add("dark") : root.classList.remove("dark");
    setIsDark(!isDark);
  };

  return (
    <header className="p-4 border-b-2 border-gray-500 flex flex-row justify-between">
      <p className="font-bold text-2xl dark:text-slate-200">Estampitiency</p>
      <div>
        <button onClick={handleTheme}>
          {" "}
          {isDark ? (
            <IoMoon className="text-bold text-3xl text-neutral-800" />
          ) : (
            <IoSunnyOutline className="text-bold text-3xl text-slate-200" />
          )}{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
