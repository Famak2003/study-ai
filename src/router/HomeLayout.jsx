import "./layouts.css";
import { Outlet } from "react-router-dom";
import STARGGERDMENU from "./../assets/menu.png";
import DOTTEDMENU from "./../assets/dotted-menu.png";
import { useState } from "react";

function Home() {
  const [dispayMenu, setDispayMenu] = useState(true);
  return (
    <div className=" flex flex-col h-fit overflow-hidden ">
      <div className=" h-[20vh] flex justify-between items-center generalPadding ">
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
        <div className=" w-screen bg-red-800 generalPadding">Hello</div>
        <div className=" w-screen ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
