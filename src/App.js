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
      <div className="App pb-[5rem] max-w-[150rem]">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
