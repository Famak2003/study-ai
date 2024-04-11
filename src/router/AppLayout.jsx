import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const nav = useNavigation();
  const isLoading = nav.state === "loading";
  return (
    <section className=" w-full h-full">
      {isLoading && (
        <div className=" flex w-full text-center items-center justify-center p-[1rem] ">
          Loading...
        </div>
      )}
      <Outlet />
    </section>
  );
}

export default AppLayout;
