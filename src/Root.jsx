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
    {
      id: 3,
      name: "Corn",
      temperature: 9,
      moisture: 4,
      volume: 1600,
      capacity: 2500,
      warehouse: 1,
    },
  ]);

  const [history, setHistory] = useState([
    {
      id: 1708808131243,
      type: "increase",
      itemId: 1,
      amount: 200,
      timestamp: {
        date: "Sun Feb 25 2024",
        time: "02:55:31 GMT+0600 (East Kazakhstan Time)",
      },
    },
    {
      id: 1708808133024,
      type: "decrease",
      itemId: 1,
      amount: 100,
      timestamp: {
        date: "Sun Feb 25 2024",
        time: "02:55:33 GMT+0600 (East Kazakhstan Time)",
      },
    },
    {
      id: 1708808134742,
      type: "increase",
      itemId: 1,
      amount: 50,
      timestamp: {
        date: "Sun Feb 25 2024",
        time: "02:55:34 GMT+0600 (East Kazakhstan Time)",
      },
    },
    {
      id: 1708808136709,
      type: "decrease",
      itemId: 1,
      amount: 20,
      timestamp: {
        date: "Sun Feb 25 2024",
        time: "02:55:36 GMT+0600 (East Kazakhstan Time)",
      },
    },
    {
      id: 1708808131243,
      type: "increase",
      itemId: 2,
      amount: 300,
      timestamp: {
        date: "Sun Feb 25 2024",
        time: "02:55:31 GMT+0600 (East Kazakhstan Time)",
      },
    },
    {
      id: 1708808133024,
      type: "decrease",
      itemId: 2,
      amount: 700,
      timestamp: {
        date: "Sun Feb 25 2024",
        time: "02:55:33 GMT+0600 (East Kazakhstan Time)",
      },
    },
    {
      id: 1708808134742,
      type: "increase",
      itemId: 2,
      amount: 70,
      timestamp: {
        date: "Sun Feb 24 2024",
        time: "02:50:34 GMT+0600 (East Kazakhstan Time)",
      },
    },
    {
      id: 1708808136709,
      type: "increase",
      itemId: 2,
      amount: 5,
      timestamp: {
        date: "Sun Feb 25 2024",
        time: "02:55:36 GMT+0600 (East Kazakhstan Time)",
      },
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
              <Outlet context={[seedInv, setSeedInv, history, setHistory]} />
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
