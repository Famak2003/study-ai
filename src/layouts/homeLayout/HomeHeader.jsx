import STARGGERDMENU from "./../../assets/menu.png";
import DOTTEDMENU from "./../../assets/dotted-menu.png";
import { useEffect, useRef, useState } from "react";
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-hot-toast'
import LogOut from "../../fireFunctions/LogOut";
import { setUserLogin } from "../../redux/slices/authSlice";

export function HomeHeader({ handleClick }) {
  const [openLogoutMenu, setOpenLogoutMenu] = useState(false)
  const logoutMenuRef = useRef()
  const logoutBtnuRef = useRef()
  const dispatch = useDispatch()
  const nav = useNavigate()

  const handleLogout = async () =>{
    try {
      const response = await LogOut();
      console.log("response from logout", response)
      nav("/");
      dispatch(setUserLogin(false))
      toast.success("Logout Successful see you soon!")

    } catch (error) {
      toast.error("Error while logging out")
      console.log(error.message);
    }
  }

  const handleLogoutMenu = () => {
    setOpenLogoutMenu(!openLogoutMenu);
  }

  useEffect(function () {
    let handleClickOutside = (e) => {
      if (
        !logoutMenuRef?.current?.contains(e.target) &&
        !logoutBtnuRef?.current?.contains(e.target)
      )
        setOpenLogoutMenu(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

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
    <div className=" relative `">
      <button 
        ref={logoutMenuRef}
        onClick={() => handleLogoutMenu()}
        className="   ">
        <img src={DOTTEDMENU} alt="menu" />
      </button>
      <ul
        ref={logoutBtnuRef}
        style={{display:`${openLogoutMenu ? "block" : 'none'}`}}
        className=" z-[999] bg-custom-black absolute bottom-[-4rem] translate-x-[-8rem] flex flex-col justify-center items-center min-w-[5rem] w-[10rem] py-[1rem] px-[0.5rem] rounded-3xl ring-1 ring-charcoal-gray duration-300">
        <li onClick={()=>handleLogout()} className=" flex flex-col justify-center items-center w-full ">
          Logout
        </li>
      </ul>
    </div>
  </div>;
}
