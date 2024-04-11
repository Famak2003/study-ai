// import { Helmet } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { useEffect, useState } from "react";

function App() {
  const [isHalfwayScrolled, setIsHalfwayScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const halfwayPoint = windowHeight / 3;

      setIsHalfwayScrolled(scrollPosition >= halfwayPoint);
    };

    window.addEventListener("scroll", handleScroll);
    console.log(isHalfwayScrolled);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHalfwayScrolled]);
  return (
    <>
      {/* <Helmet>
        // <title>Chat AI</title>
        //{" "}
      </Helmet> */}
      <div className="App h-[100%] pb-[5rem] max-w-[150rem]">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
