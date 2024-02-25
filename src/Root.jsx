import { FaSeedling } from "react-icons/fa";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import "./Root.css";
import { useState } from "react";
import { toast } from "sonner";
import useAuth from "./hooks/useAuth";

const Root = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("User Logged Out");
      })
      .catch((error) => console.log(error));
  };

  const closeSidebar = () => {
    const closeBtn = document.getElementById("my-drawer-2");
    if (closeBtn) {
      closeBtn.checked = false;
    }
  };

  const location = useLocation();

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
      warehouse: 3,
    },
    {
      id: 4,
      name: "Sunflower",
      temperature: 12,
      moisture: 2,
      volume: 50,
      capacity: 200,
      warehouse: 4,
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

  const [machines, setMachines] = useState([
    {
      id: 1,
      name: "Tractor",
      loaned: true,
      loandetails: {
        taken: "2024-02-24",
        return: "2024-03-06",
        location: "Warehouse 2",
      },
      availability: "In Use",
      quantity: 1,
    },
    {
      id: 2,
      name: "Combined Harvester",
      loaned: false,
      loandetails: {
        taken: "",
        return: "",
        location: "",
      },
      availability: "In Use",
      quantity: 1,
    },
    {
      id: 3,
      name: "Cultivator",
      loaned: false,
      loandetails: {
        taken: "",
        return: "",
        location: "",
      },
      availability: "Maintenance",
      quantity: 2,
    },
    {
      id: 4,
      name: "Planter",
      loaned: true,
      loandetails: {
        taken: "2024-02-24",
        return: "2024-28-24",
        location: "Warehouse 1",
      },
      availability: "Idle",
      quantity: 2,
    },
  ]);

  return (
    <>
      <>
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
              <Outlet
                context={[
                  seedInv,
                  setSeedInv,
                  history,
                  setHistory,
                  machines,
                  setMachines,
                ]}
              />
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
                  }`}
                >
                  <li className="">Dashboard</li>
                </NavLink>
                <NavLink
                  to={"/seeds"}
                  onClick={closeSidebar}
                  className={`p-2 w-full border-2 hover:underline rounded-xl ${
                    location.pathname === "/seeds"
                      ? "text-primary font-bold"
                      : ""
                  } `}
                >
                  <li className="">Seeds</li>
                </NavLink>
                <NavLink
                  to={"/equipments"}
                  onClick={closeSidebar}
                  className={`p-2 w-full border-2 hover:underline rounded-xl ${
                    location.pathname === "/equipments"
                      ? "text-primary font-bold"
                      : ""
                  } `}
                >
                  <li className="">Equipments</li>
                </NavLink>
                <hr />
                {user ? (
                  <>
                    <div className="flex flex-col justify-center items-center gap-2 rounded-lg text-white">
                      <img
                        src={user?.photoURL}
                        className="w-12 aspect-square rounded-full"
                      />
                      <p className="text-secondary font-bold">
                        {user?.displayName}
                      </p>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <hr />
                <button
                  className="btn bg-red-500 text-white hover:bg-red-600 border-none"
                  onClick={() => handleLogOut()}
                >
                  Logout
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
