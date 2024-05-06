import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const nav = useNavigation();
  // console.log(nav);
  const isLoading = nav.state === "loading";
  return (
    <section className=" w-full h-fit ">
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
