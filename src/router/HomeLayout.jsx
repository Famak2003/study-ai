import { Outlet } from "react-router-dom";
import STARGGERDMENU from "./../assets/menu.png";
import DOTTEDMENU from "./../assets/dotted-menu.png";

function Home() {
  return (
    <div className=" flex flex-col h-fit overflow-hidden ">
      <div className=" h-[20vh] flex justify-between items-center generalPadding ">
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
    </div>
  );
}

export default Home;
