import ChatHistoryElement from "../../components/ui/ChatHistoryElement";

export function Menu() {
  return <div className=" Customise-ScrollBar w-[90vw] bg-custom-black pt-[10rem] generalPadding h-screen overflow-y-scroll ">
    <div className=" flexing-cols gap-[3rem]">
      <div className=" flexing-cols gap-[2rem]">
        <p>Today</p>
        <ul className=" flexing-cols gap-[1rem]">
          {Array.from({ length: 2 }, (_, i) => i).map((_, idx) => (
            <ChatHistoryElement
              key={idx}
              keyword={"Lorem ipsum, dolor sit amet consectetur adipisicing elit"} />
          ))}
        </ul>
      </div>
      <div className=" flexing-cols gap-[2rem]">
        <p>7 days</p>
        <ul className=" flexing-cols gap-[1rem]">
          {Array.from({ length: 5 }, (_, i) => i).map((_, idx) => (
            <ChatHistoryElement
              key={idx}
              keyword={"How far is the moon"} />
          ))}
        </ul>
      </div>
      <div className=" flexing-cols gap-[2rem]">
        <p>30 days</p>
        <ul className=" flexing-cols gap-[1rem]">
          {Array.from({ length: 9 }, (_, i) => i).map((_, idx) => (
            <ChatHistoryElement
              key={idx}
              keyword={"Lorem ipsum dolor, sit amet consectetur"} />
          ))}
        </ul>
      </div>
    </div>
  </div>;
}
