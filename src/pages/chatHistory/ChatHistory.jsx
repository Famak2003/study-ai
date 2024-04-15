import "./chatHistory.scss";

import ARROWUP from "./../../assets/arrow-up.png";

import * as Button from "../../components/Buttons";
import ChatHistoryElement from "./ChatHistoryElement";
import { Link } from "react-router-dom";
import useIsWindowScrolled from "../../hooks/useIsWindowScrolled";

function Home() {
  const isScrolled = useIsWindowScrolled();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", //smooth scrolling animation
    });
  };
  return (
    <div className=" flex flex-col gap-[4rem] generalPadding">
      <div className=" flex flex-col gap-[2rem]">
        <p className=" text-[1.6rem]">New Chats</p>
        <Link to={"/home/chat"}>
          <Button.Primary>Create New Chats</Button.Primary>
        </Link>
      </div>
      <div className=" flex justify-between items-center">
        <p className=" text-[1.6rem]">Chats History</p>
        <small className=" text-[1.4rem]">See More</small>
      </div>
      <div className=" flexing-cols gap-[3rem]">
        <div className=" flexing-cols gap-[2rem]">
          <p>Today</p>
          <ul className=" flexing-cols gap-[1rem]">
            {Array.from({ length: 2 }, (_, i) => i).map((_, idx) => (
              <ChatHistoryElement
                key={idx}
                keyword={"who is the tallest? ... Gold 😂"}
              />
            ))}
          </ul>
        </div>
        <div className=" flexing-cols gap-[2rem]">
          <p>7 days</p>
          <ul className=" flexing-cols gap-[1rem]">
            {Array.from({ length: 5 }, (_, i) => i).map((_, idx) => (
              <ChatHistoryElement key={idx} keyword={"How far is the moon"} />
            ))}
          </ul>
        </div>
        <div className=" flexing-cols gap-[2rem]">
          <p>30 days</p>
          <ul className=" flexing-cols gap-[1rem]">
            {Array.from({ length: 9 }, (_, i) => i).map((_, idx) => (
              <ChatHistoryElement
                key={idx}
                keyword={"Can a chicken give birth to a horse?? ...what!!"}
              />
            ))}
          </ul>
        </div>
      </div>
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
