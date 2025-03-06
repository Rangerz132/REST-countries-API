import Header from "./components/Header";
import FilterSection from "./components/FilterSection";

function Home() {
  return (
    <div className="flex flex-col space-y-6">
      <Header />
      <div className="w-full wrapper ">
        <FilterSection />
      </div>
    </div>
  );
}

export default Home;
