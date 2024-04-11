import { Outlet } from "react-router-dom";
import ARROWUP from "./../assets/arrow-up.png";

import STARGGERDMENU from "./../assets/menu.png";
import DOTTEDMENU from "./../assets/dotted-menu.png";
import useIsWindowScrolled from "../hooks/useIsWindowScrolled";
function Home() {
  const isScrolled = useIsWindowScrolled();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", //smooth scrolling animation
    });
  };
  return (
    <div className=" flex flex-col gap-[5rem] pt-[3rem] generalPadding">
      <div className=" flex justify-between items-center">
        <figure>
          <img src={STARGGERDMENU} alt="menu" />
        </figure>
        <h1 className=" text-[2rem]">ChatAI</h1>
        <figure>
          <img src={DOTTEDMENU} alt="menu" />
        </figure>
      </div>
      <>
        <Outlet />
      </>
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
