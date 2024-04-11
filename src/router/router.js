import Error from "../components/ui/Error";
import AppLayout from "./AppLayout";
import AuthLayout from "./AuthLayout";
import HomeLayout from "./HomeLayout";
import * as Pages from "./../pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Pages.LandingPage />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/auth/login",
            element: <Pages.Login />,
          },
          {
            path: "auth/signup",
            element: <Pages.CreateAccount />,
          },
        ],
      },
      {
        element: <HomeLayout />,
        children: [
          {
            path: "/home/chat-history",
            element: <Pages.ChatHistory />,
          },
          {
            path: "/home/chat",
            element: <Pages.Chat />,
          },
        ],
      },
    ],
  },
]);

export default router;
