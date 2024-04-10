import LANDING from "./../assets/landing image.png"
import { Primary } from "../components/Buttons"
import { NavLink } from "react-router-dom"

function LandingPage() {
    return (
        <section className=" flex flex-col bg-transparent ">
            <figure className=" h-[60%] w-full mb-[3rem] ">
                <img className=" h-full w-full object-contain " src={LANDING} alt="landing-page" />
            </figure>
            <div className=" flex flex-col gap-[3rem] justify-center items-center text-center generalPadding ">
                <h1 className=" font-bold text-[2.4rem] ">
                    The Future of Chat is Here With AI Technology
                </h1>
                <p className=" text-[1.1rem]">
                    "The future of chat is here with AI technology" implies that the integration of AI into chat technology is already happening and that it's an exciting development for the way we communicate.
                        AI-powered chatbots are becoming increasingly sophisticated and are able to understand and respond to natural language,
                </p>
                <div className=" w-full">
                    <NavLink to={'/auth/login'}>
                        <Primary>
                            Get started
                        </Primary>
                    </NavLink>
                </div>
            </div>
          
        </section>
    )
}

export default LandingPage
