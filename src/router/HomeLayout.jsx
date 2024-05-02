import "./layouts.css";
import { Outlet } from "react-router-dom";

import ARROWUP from "./../assets/arrow-up.png";
import STARGGERDMENU from "./../assets/menu.png";
import DOTTEDMENU from "./../assets/dotted-menu.png";
import { useState } from "react";
import useIsWindowScrolled from "../hooks/useIsWindowScrolled";

function Home() {
  const [dispayMenu, setDispayMenu] = useState(false);

  const isScrolled = useIsWindowScrolled();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", //smooth scrolling animation
    });
  };
  return (
    <div className=" flex flex-col h-fit overflow-hidden ">
      <div className=" h-[15svh] flex justify-between items-center generalPadding ">
        <button className=" " onClick={() => setDispayMenu(!dispayMenu)}>
          <img src={STARGGERDMENU} alt="menu" />
        </button>
        <h1 className=" text-[2rem]">ChatAI</h1>
        <button>
          <img src={DOTTEDMENU} alt="menu" />
        </button>
      </div>
      <div
        className={` home-container flex w-fit ${
          dispayMenu ? "translate-x-0" : "translate-x-[-100vw]"
        } duration-700 `}
      >
        {/* // Menu // */}
        <div className=" w-screen bg-red-800 generalPadding ">Hello</div>
        {/* // Outlet // */}
        <div className=" w-screen rotate-[0deg] ">
          <Outlet />
        </div>
      </div>

      {/* // Scroll To Top Mechanics // */}
      {isScrolled && (
        <div
          className=" fixed bottom-[4rem] right-[.5rem] mobile:right-[2rem]"
          onClick={handleScrollToTop}
        >
          <img
            className=" scale-75 hover:scale-90 duration-300"
            src={ARROWUP}
            alt="scroll up"
          />
        </div>
      )}
    </div>
  );
}

export default Home;
