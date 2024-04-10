// import { Route, Routes } from "react-router-dom";
import * as Pages from "./pages";
import Auth from "./router/Auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages.LandingPage />,
  },
  {
    element: <Auth />,
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
]);

function App() {
  return (
    <div className="App ring-2 ring-red-800 h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
