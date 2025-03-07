import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className=" w-full bg-white shadow-sm dark:bg-dark-blue ">
      <div className="wrapper py-6 flex flex-row items-center justify-between">
        {/** Title */}
        <h2 className="font-bold text-very-dark-blue-2 dark:text-white">
          Where in the world?
        </h2>
        {/** Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
