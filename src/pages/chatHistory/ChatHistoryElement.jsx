import MESSAGE from "./../../assets/message.png";
import TRASH from "./../../assets/delete.png";

function ChatHistoryElement({ keyword }) {
  return (
    <li className=" flex justify-between items-center h-[5rem] w-full bg-charcoal-gray rounded-2xl px-[1rem] py-[.7rem]">
      <div className=" flex gap-[2rem] justify-center items-center h-[60%]">
        <img className=" h-[100%] " src={MESSAGE} alt="conversation" />
        <p className=" text-[1.4rem]">{keyword}</p>
      </div>
      <img className=" h-[1.8rem] " src={TRASH} alt="delete" />
    </li>
  );
}

export default ChatHistoryElement;
