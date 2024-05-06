import STARGGERDMENU from "./../../assets/menu.png";
import DOTTEDMENU from "./../../assets/dotted-menu.png";

export function HomeHeader({ handleClick }) {
  return <div
    className={` w-full h-[15svh] flex justify-between items-center generalPadding `}
  >
    <button
      // disabled={location[0] === "chat-history"}
      className=" "
      onClick={() => handleClick()}
    >
      <img src={STARGGERDMENU} alt="menu" />
    </button>
    <h1 className=" text-[2rem]">ChatAI</h1>
    <button className="  ">
      <img src={DOTTEDMENU} alt="menu" />
    </button>
  </div>;
}
