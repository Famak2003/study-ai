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
    <div className="flex flex-col h-fit overflow-hidden ">
      <div
        className={` home-container flex w-fit ${
          dispayMenu ? "translate-x-0" : "translate-x-[-90vw]"
        } duration-700 `}
      >
        {/* // Menu // */}
        <div className=" w-[90vw] bg-custom-black pt-[10rem] generalPadding ">
          Today
        </div>
        {/* // Outlet // */}
        <div
          className={` box flex flex-col relative h-fit w-screen  ${
            dispayMenu ? "rotate-[-10deg] rounded-3xl " : "rotate-0"
          } delay-500 duration-300  `}
        >
          <div className=" z-[10] bg-custom-black rounded-3xl ">
            <div
              className={` w-full h-[15svh] flex justify-between items-center generalPadding `}
            >
              <button className=" " onClick={() => setDispayMenu(!dispayMenu)}>
                <img src={STARGGERDMENU} alt="menu" />
              </button>
              <h1 className=" text-[2rem]">ChatAI</h1>
              <button className="  ">
                <img src={DOTTEDMENU} alt="menu" />
              </button>
            </div>

            <div>
              <Outlet />
            </div>
          </div>
          {/* // Effects start // */}
          <div
            className={` absolute inset-0 z-[-1] bg-charcoal-gray ${
              dispayMenu ? " sm:rotate-[-3deg] rotate-[-4deg] rounded-3xl" : ""
            }  delay-[550ms] duration-300 `}
          >
            {" "}
          </div>
          <div
            className={` absolute inset-0 z-[-2]  bg-light-gray ${
              dispayMenu ? " sm:rotate-[-5deg] rotate-[-8deg] rounded-3xl" : ""
            }  delay-[600ms] duration-300 `}
          >
            {" "}
          </div>
          {/* // Effects end // */}
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
