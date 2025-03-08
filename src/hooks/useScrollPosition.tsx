import { useEffect, useState } from "react";

function useScrollPosition() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    setIsBottom(
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
    );
  }

  return { isBottom };
}

export default useScrollPosition;
