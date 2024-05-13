import {toast} from 'react-hot-toast'

import GOOGLE from "./../assets/google.png";

import {useDispatch} from "react-redux"

import { Form } from "antd";
import { Link, Outlet } from "react-router-dom";
import * as Hooks from "../hooks";
import { Primary } from "../components/Buttons";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
// import useHandleGoogleSignIn from "../hooks/useHandleGoogleSignIn";
import GoogleSignIn from "../fireFunctions/GoogleSignIn";
import Login from "../fireFunctions/Login";
import Signup from "../fireFunctions/Signup";
import { setUserLogin } from '../redux/slices/authSlice';

// const socials = [
//   { alt: "google", image: GOOGLE },
//   { alt: "facebook", image: FACEBOOK },
//   // { alt: "apple", image: APPLE },
// ];

function Auth() {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const [currentPage] = Hooks.useGetCurrentPage();
  const [authContent, setAuthContent] = useState({});
  const [error, setError] = useState("")
  // const handleLogin = Hooks.useHandleLoginSubmit()
  // const handleSignUp = Hooks.useHandleSignUpSubmit()
  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await GoogleSignIn();
      console.log("response from google Signup", response)
      nav("/home/chat-history");
      dispatch(setUserLogin(true))
      toast.success("Login Successful")

    } catch (error) {
      toast.error("invalid login... try again in a few minutes")
      console.log(error.message);
    }
  };

  // console.log(currentPage)


 async function handleLogin (value, error, setError) {
    // const login = useSelector((state)=> state.auth.login)
    console.log(value)
    setError("")
    try {
      const response = await Login(value.email, value.password)
      console.log("response from Login ===> ", response)
      nav("/home/chat-history");
      dispatch(setUserLogin(true))
      toast.success("Login Successful")

    } catch (err){
      toast.error("invalid login... check credentials")
      setError(err.message)
      console.error(error)
    }
  }


async function handleSignUp (value, error, setError) {
    console.log(value)
    setError("")
    try {
      const response = await Signup(value.email, value.password)
      console.log("reponse from sign up ===> ", response)
      nav("/home/chat-history");
      dispatch(setUserLogin(true))
      toast.success("Sign up Successful")
    } catch (err) {
      toast.error("Sign up error... check credentials and try again")
      setError(err.message)
      console.error(error)
    }
  }

  

  const handleSubmit = (value) =>{
    if(currentPage === "login") {
      handleLogin(value, error, setError)
    }else if (currentPage === "signup"){
      handleSignUp(value, error, setError)
    }
  }

  useEffect(() => {
    function authContentDecider() {
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
    setAuthContent(authContentDecider());
  }, [currentPage]);


  return (
    <div className=" flex flex-col gap-[5rem] text-center py-[5rem] generalPadding">
      <div className="">
        <h1 className=" text-[5.2rem] ">ChatAI</h1>
        <p className=" text-[1.4rem]">{`Please ${currentPage} To Your Account`}</p>
      </div>
      <div className=" flex flex-col gap-[3rem]">
        <div className=" flex justify-center items-center gap-[2rem]">
          <div className=" flex justify-center items-center bg-charcoal-gray w-[8rem] h-[7rem] rounded-2xl ">
            <img
              src={GOOGLE}
              onClick={(e) => handleGoogleSignin(e)}
              className=" object-contain h-[2.1rem]"
              alt={"google"}
            />
          </div>
        </div>
        <div className=" relative flex flex-col justify-center items-center h-[4rem]">
          <hr className=" border border-light-gray w-[70%] " />
          <span className=" absolute rounded-full p-[1rem] bg-custom-black z-[99]">
            or
          </span>
        </div>
      </div>
      <Form
        className=" flex flex-col gap-[1rem] "
        onFinish={(value) => handleSubmit(value)}
      >
        <Outlet />
        <Primary type="submit">
          {currentPage === "signup" ? "Create Account" : currentPage}
        </Primary>
      </Form>

      <p>
        {authContent?.text} &nbsp;
        <Link to={authContent.link}>
          <span className=" text-custom-red ">{authContent?.actionText}</span>
        </Link>
      </p>
    </div>
  );
}

export default Auth;
