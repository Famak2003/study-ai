import "./chatHistory.scss";

import * as Button from "../../components/Buttons";
import ChatHistoryElement from "./ChatHistoryElement";

function Home() {
  return (
    <div className=" flex flex-col gap-[4rem]">
      <div className=" flex flex-col gap-[2rem]">
        <p className=" text-[1.6rem]">New Chats</p>
        <Button.Primary>Create New Chats</Button.Primary>
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
    </div>
  );
}

export default Home;
