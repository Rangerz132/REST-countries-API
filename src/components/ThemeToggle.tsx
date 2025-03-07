import { TbMoon, TbSun } from "react-icons/tb";
import { ThemeContext, useThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useThemeContext(ThemeContext);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setTheme((prevState) => (prevState === "Light" ? "Dark" : "Light"));
  };

  return (
    <div
      onClick={toggleTheme}
      className="flex flex-row items-center justify-center space-x-2 cursor-pointer"
    >
      {/** Theme icon */}
      {theme === "Light" ? (
        <TbMoon className="text-very-dark-blue-2 dark:text-white" />
      ) : (
        <TbSun className="text-very-dark-blue-2 dark:text-white" />
      )}

      {/** Theme name */}
      <span className="capitalize text-very-dark-blue-2 text-sm font-semibold dark:text-white">
        {theme === "Light" ? "Dark mode" : " Light mode"}
      </span>
    </div>
  );
};

export default ThemeToggle;
