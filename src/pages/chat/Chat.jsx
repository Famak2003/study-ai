import "./chat.scss";

import SEND from "./../../assets/send-message.png";

import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Form, useActionData } from "react-router-dom";
import { useEffect } from "react";
import { setCurrentChat } from "../../redux/slices/currentChatSlice";

function Chat() {
  const dispatch = useDispatch();
  const actionResult = useActionData();
  console.log(actionResult);
  const conversation = useSelector((state) => state.currentChat.currentChat);

  useEffect(() => {
    if (!actionResult) {
      return;
    }
    dispatch(setCurrentChat(actionResult));
  }, [dispatch, actionResult]);

  return (
    <div className=" flex-auto flex flex-col justify-between gap-[1rem] w-full h-[80vh] ">
      <ul className=" Customise-ScrollBar w-full flex flex-col gap-[3rem] overflow-y-scroll generalPadding h-[70%]  ">
        {conversation.map((obj, idx) => (
          <li key={idx} className={` ${obj.author}`}>
            {obj.text}
          </li>
        ))}
      </ul>

      <div className=" h-[30%] w-full rounded-t-[2rem] bg-charcoal-gray px-[2rem] pt-[2.5rem] ">
        <Form
          method="POST"
          className=" flex justify-between gap-[1rem] items-center "
        >
          <Input
            name="text"
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
