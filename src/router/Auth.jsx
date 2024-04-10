import GOOGLE from "./../assets/google.png";
import FACEBOOK from "./../assets/facebook.png";
import APPLE from "./../assets/apple.png";

import { Form } from "antd";
import { Link, Outlet } from "react-router-dom";
import * as Hooks from "./../hooks";
import { Primary } from "../components/Buttons";
import { useEffect, useState } from "react";

const socials = [
  { alt: "google", image: GOOGLE },
  { alt: "facebook", image: FACEBOOK },
  { alt: "apple", image: APPLE },
];

function Auth() {
  const [currentPage] = Hooks.useGetCurrentPage();
  const [questioner, setQuestioner] = useState({});

  useEffect(() => {
    function linker() {
      if (currentPage === "login") {
        return {
          text: "Don't have an account?",
          actionText: "sign up",
          link: "auth/signup",
        };
      } else {
        return {
          text: "Already have an account?",
          actionText: "login",
          link: "auth/login",
        };
      }
    }
    setQuestioner(linker());
  }, [currentPage]);

  return (
    <section className=" flex flex-col gap-[5rem] text-center pt-[5rem] generalPadding">
      <div className="">
        <h1 className=" text-[5.2rem] ">ChatAI</h1>
        <p className=" text-[1.4rem]">{`Please ${currentPage} To Your Account`}</p>
      </div>
      <div className=" flex flex-col gap-[3rem]">
        <ul className=" flex justify-center items-center gap-[2rem]">
          {socials.map((obj, idx) => {
            return (
              <li
                key={idx}
                className=" flex justify-center items-center bg-charcoal-gray w-[8rem] h-[7rem] rounded-2xl "
              >
                <img
                  src={obj.image}
                  className=" object-contain h-[2.1rem]"
                  alt={obj.alt}
                />
              </li>
            );
          })}
        </ul>
        <div className=" relative flex flex-col justify-center items-center h-[4rem]">
          <hr className=" border border-light-gray w-[70%] " />
          <span className=" absolute rounded-full p-[1rem] bg-custom-black z-[99]">
            or
          </span>
        </div>
      </div>
      <Form
        className=" flex flex-col "
        onFinish={(value) => {
          console.log(value);
        }}
      >
        <Outlet />
        <Primary type="submit">
          {currentPage === "signup" ? "Create Account" : currentPage}
        </Primary>
      </Form>

      <p>
        {questioner?.text} &nbsp;
        <Link to={questioner.link}>
          <span className=" text-custom-red ">{questioner?.actionText}</span>
        </Link>
      </p>
    </section>
  );
}

export default Auth;
