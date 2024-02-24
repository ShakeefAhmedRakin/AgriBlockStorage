import { BsMoisture } from "react-icons/bs";
import { CiTempHigh } from "react-icons/ci";

const Seeds = () => {
  let seedsItems = [
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
  ];

  const calcFullness = (vol, cap) => {
    return (parseInt(vol / cap) * 100).toString();
  };

  let history = [];
  console.log(parseInt((700 / 1500) * 100));
  return (
    <>
      {/* CONTAINER */}
      <div className="space-y-4">
        {/* DATAS */}
        {seedsItems.map((item) => (
          <div className="flex gap-4" key={item.id}>
            <div className=" bg-red-500 text-white font-bold flex items-center justify-center h-40 aspect-square shadow-xl rounded-xl">
              {item.name}
            </div>
            <div className="flex-1 border-2 rounded-xl shadow-xl p-3">
              {/* SENSOR DATA */}
              <div className="flex items-center gap-2">
                <div className="bg-cyan-500 text-white font-bold p-3 flex items-center gap-2 rounded-xl">
                  <BsMoisture className="text-3xl"></BsMoisture>
                  <span>{item.moisture} g/m³</span>
                </div>
                <div className="bg-red-500 text-white font-bold p-3 flex items-center gap-2 rounded-xl">
                  <CiTempHigh className="text-3xl"></CiTempHigh>
                  <span>{item.temperature} °C</span>
                </div>
              </div>
              <hr className="my-2" />
              {/* INFORMATION */}
              <div className="">
                <h1 className="my-1 font-medium">
                  Warehouse: <span className="font-bold">{item.warehouse}</span>
                </h1>
                <h1 className="my-1 font-medium">
                  Max Capacity:{" "}
                  <span className="font-bold">{item.capacity}</span>
                </h1>
                <h1 className="my-1 font-medium">
                  Current Capacity:{" "}
                  <span className="font-bold">{item.volume}</span>
                </h1>
              </div>
              <hr className="my-2" />
              {/* BAR/CAPACITY */}
              <progress
                className="progress h-4 mt-2 progress-success w-[100%]"
                value={item.volume}
                max={item.capacity}
              ></progress>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Seeds;
