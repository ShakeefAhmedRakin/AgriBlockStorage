import { useEffect, useState } from "react"; // Import useState
import { useOutletContext } from "react-router-dom";

const DashboardHome = () => {
  const [seedInv, setSeedInv, history, setHistory, machines, setMachines] =
    useOutletContext();

  const [lowCount, setLowCount] = useState(0);

  useEffect(() => {
    let count = 0; // Initialize count

    // Count items with volume/capacity ratio less than 50%
    for (const item of seedInv) {
      if ((item.volume / item.capacity) * 100 < 50) {
        count++;
      }
    }

    setLowCount(count);
  }, [seedInv]);

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 text-white font-heading">
        <div className="bg-[#D45052] py-10 flex justify-around items-center rounded-lg shadow-xl">
          <div className="text-right">
            <p className=" text-center text-3xl font-bold">{lowCount}</p>{" "}
            <p>Low Capacity Seeds</p>
          </div>
        </div>
        <div className="bg-[#02BCE9] py-10 flex justify-around items-center rounded-lg shadow-xl">
          <div className="text-right">
            <p className=" text-center text-3xl font-bold">
              {machines.filter((item) => item.loaned).length}
            </p>
            <p>Loaned Equipments</p>
          </div>
        </div>
        <div className="bg-[#00A157] py-10 flex justify-around items-center rounded-lg shadow-xl">
          <div className="text-right">
            <p className=" text-center text-3xl font-bold">
              {
                machines.filter((item) => item.availability === "Maintenance")
                  .length
              }
            </p>{" "}
            <p>Equipments Under Maintenance</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 mt-8">
        {seedInv.map((item) => (
          <div key={item.id}>
            <hr className="my-2" />
            <div className="ml-1 flex flex-col lg:flex-row items-center gap-2">
              <h1 className="font-bold">{item.name}</h1>
              <h1>Current Volume: {item.volume} kg</h1>
              <h1>Max Capacity: {item.capacity} kg</h1>
            </div>
            <progress
              className={`progress ${
                item.volume / item.capacity < 0.3 ? "progress-error" : ""
              } h-3 mt-2 progress-success w-[100%]`}
              value={item.volume}
              max={item.capacity}
            ></progress>

            <hr className="my-2" />
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardHome;
