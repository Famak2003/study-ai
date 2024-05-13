import "./../layouts.css";
import { Outlet } from "react-router-dom";

import ARROWUP from "./../../assets/arrow-up.png";
import { useState } from "react";
import useIsWindowScrolled from "../../hooks/useIsWindowScrolled";
import { useGetCurrentPage } from "../../hooks";
import { Menu } from "./Menu";
import { CardEffect } from "./CardEffect";
import { HomeHeader } from "./HomeHeader";

function Home() {
  const location = useGetCurrentPage();
  const [disabledMenu, setDisableMenu] = useState(false)
  const [dispayMenu, setDispayMenu] = useState(false);

  const isScrolled = useIsWindowScrolled();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", //smooth scrolling animation
    });
  };

  const handleClick = () =>{
    if (location[0] === 'chat-history'){
      setDisableMenu(!disabledMenu)
    }else{
      setDispayMenu(!dispayMenu)
    }
  }
  
  return (
    <div className="flex flex-col h-fit overflow-hidden ">
      <div
        className={` home-container flex w-fit ${
          dispayMenu ? "translate-x-0" : "translate-x-[-90vw]"
        } duration-700 h-full ring-2 ring-red-600 `}
      >
        {/* // Menu // */}
        <Menu />
        {/* // Outlet // */}
        <div
          className={` box flex flex-col relative h-fit w-screen  ${
            dispayMenu ? "rotate-[-10deg] rounded-3xl " : "rotate-0"
          } delay-500 duration-300  `}
        >
          <div className={` z-[10] bg-custom-black rounded-3xl ${ disabledMenu ? "wrongClick" : "" }  `}>
            <HomeHeader handleClick={handleClick} />

            <div>
              <Outlet />
            </div>
          </div>
          {/* // Effects start // */}
          <CardEffect dispayMenu={dispayMenu} />
          {/* // Effects end // */}
        </div>
      </div>

      {/* // Scroll To Top Mechanics // */}
      {isScrolled && (
        <div
          className=" fixed bottom-[4rem] right-[.5rem] mobile:right-[2rem] h-full"
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
