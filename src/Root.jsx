import { FaSeedling } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { GrLogout } from "react-icons/gr";
import "./Root.css";
import { useState } from "react";
import { Toaster } from "sonner";

const Root = () => {
  const closeSidebar = () => {
    const closeBtn = document.getElementById("my-drawer-2");
    if (closeBtn) {
      closeBtn.checked = false;
    }
  };

  const [seedInv, setSeedInv] = useState([
    {
      id: 1,
      name: "Rice",
      temperature: 4,
      moisture: 5,
      volume: 700,
      capacity: 1000,
      warehouse: 2,
    },
    {
      id: 2,
      name: "Wheat",
      temperature: 2,
      moisture: 3,
      volume: 200,
      capacity: 2000,
      warehouse: 1,
    },
  ]);

  return (
    <>
      <>
        <Toaster position="bottom-right" richColors />
        <div className="drawer md:drawer-open h-full">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content overflow-x-auto">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-md text-lg bg-secondary border-none text-white hover:bg-secondary drawer-button md:hidden mb-3 fixed left-2 top-2 rounded-xl z-50"
            >
              <span className="text-xs">Menu</span>
              <TbLayoutSidebarLeftExpandFilled />
            </label>
            <div className="p-2 md:p-4 md:h-full ml-0 md:ml-[333px]">
              <hr className="mt-[54px] block md:hidden" />
              <Outlet context={[seedInv, setSeedInv]}></Outlet>
            </div>
          </div>
          <div className="drawer-side h-full z-50">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu h-full p-4 w-82 bg-base-200 text-base-content fixed">
              {/* Sidebar content here */}
              <div className="flex justify-between items-center gap-2">
                <div className="text-secondary flex items-center gap-4">
                  <FaSeedling className="text-3xl text-primary"></FaSeedling>
                  <h1 className="font-heading text-xl md:text-3xl font-bold">
                    AgriBlockStorage
                  </h1>
                </div>
                <label
                  onClick={closeSidebar}
                  className="btn text-xl bg-secondary text-white hover:bg-secondary drawer-button md:hidden"
                >
                  <TbLayoutSidebarLeftCollapseFilled />
                </label>
              </div>
              <hr className="my-2" />
              <div className="flex flex-col text-lg font-heading font-medium gap-4">
                {/* SHARED ROUTE */}
                <NavLink
                  to={"/"}
                  onClick={closeSidebar}
                  className={`p-2 w-full border-2 hover:underline rounded-xl ${
                    location.pathname === "/" ? "text-primary font-bold" : ""
                  } ${location.pathname === "/test" ? "" : ""} `}
                >
                  <li>Dashboard</li>
                </NavLink>
                <NavLink
                  to={"/seeds"}
                  onClick={closeSidebar}
                  className={`p-2 w-full border-2 hover:underline rounded-xl ${
                    location.pathname === "/seeds"
                      ? "text-primary font-bold"
                      : ""
                  } ${location.pathname === "/test" ? "" : ""} `}
                >
                  <li>Seeds</li>
                </NavLink>

                <hr />

                <hr className="my-2" />
                <Link
                  to={"/"}
                  onClick={closeSidebar}
                  className={"btn bg-primary hover:bg-primary text-white"}
                >
                  <li>Home</li>
                </Link>
                <button className="btn btn-sm md:btn-md bg-secondary hover:shadow-xl hover:bg-secondary font-semibold text-white">
                  Log Out
                  <GrLogout className="text-xl"></GrLogout>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </>
    </>
  );
};

export default Root;