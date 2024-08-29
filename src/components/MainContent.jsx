import {  Outlet, useLocation } from "react-router-dom";
import Header from "./Header";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

export default function MainContent({ sidebarOpen, setSidebarOpen, desktopSidebarOpen, setDesktopSidebarOpen }) {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/Login" && (
        <div
          className={classNames(
            "lg:flex-1 lg:relative lg:overflow-hidden",
            desktopSidebarOpen ? "lg:w-4/5" : "lg:w-full"
          )}
        >
          {location.pathname !== "/Login" && (
             <Header
             sidebarOpen={sidebarOpen}
             setSidebarOpen={setSidebarOpen}
             desktopSidebarOpen={desktopSidebarOpen}
             setDesktopSidebarOpen={setDesktopSidebarOpen}
           />
          )}

          <div>
          <main className="h-screen overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-white scrollbar-track-white">
  <div className="px-2">
    <div className="w-full bg-white overflow-y-auto rounded-2xl p-4">
      <Outlet />
      <div className="h-24"></div>
    </div>
  </div>
</main>
          </div>
        </div>
      )}
    </>
  );
}
