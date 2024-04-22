import "./chat.scss";
import SEND from "./../../assets/send-message.png";

import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Form, useActionData } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { setCurrentChat } from "../../redux/slices/currentChatSlice";
import scrollToBottom from "../../utilities/scrollToBottom";

function Chat() {
  const chatRef = useRef();
  const [chatMessage, setChatMessage] = useState("");
  const dispatch = useDispatch();
  const actionResult = useActionData();
  const conversation = useSelector((state) => state.currentChat.currentChat);

  useEffect(() => {
    if (!actionResult?.text) {
      return;
    }
    dispatch(setCurrentChat(actionResult));
  }, [dispatch, actionResult]);

  useLayoutEffect(() => {
    scrollToBottom(chatRef);
  }, [conversation]);

  return (
    <div className=" flex-auto flex flex-col justify-between gap-[1rem] w-full h-[85svh] ">
      <ul className=" Customise-ScrollBar w-full flex flex-col gap-[3rem] overflow-y-scroll generalPadding h-full  ">
        {conversation.map((obj, idx) => (
          <li key={idx} className={` ${obj.author}`}>
            {obj.text}
          </li>
        ))}
        {/* used for scrolling to the end of the chat */}
        <div className="" ref={chatRef}></div>
      </ul>

      <div className=" h-fit w-full rounded-t-[2rem] bg-charcoal-gray px-[2rem] py-[2.5rem] ">
        <Form
          method="POST"
          onSubmit={() => setChatMessage("")}
          className=" flex justify-between gap-[1rem] items-center "
        >
          <Input
            name="text"
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            className="textInput text-[1.3rem] rounded-[2.5rem] h-[5.3rem] w-[85%] bg-custom-black border-none px-[2rem]"
            placeholder="write your question to ai chatbot here"
          />
          <button className=" flex justify-center items-center h-[5rem] w-[5.1rem] rounded-full pt-[.7rem] bg-custom-red">
            <img
              className=" h-[80%] w-[100%] scale-[60%]"
              src={SEND}
              alt="send"
            />
          </button>
        </Form>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  let chat = {};

  chat = {
    author: "human",
    ...data,
  };
  return chat;
}

export default Chat;
