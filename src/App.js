// import { Helmet } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  return (
    <>
      {/* <Helmet>
        // <title>Chat AI</title>
        //{" "}
      </Helmet> */}
      <div className="App h-fit max-w-[150rem] ring-2 ring-green-600 ">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
