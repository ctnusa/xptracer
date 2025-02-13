import { useTheme } from "../hooks/useTheme";

const Settings = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>
      {isDarkMode && <div className="w-10 h-10 text-white">"DARK MODE"</div>}
      {!isDarkMode && <div className="w-10 h-10 text-black">"WHITE MODE"</div>}
      <button className="w-50 h-5 bg-white text-black" onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export { Settings };
