import { BsMoisture } from "react-icons/bs";
import { CiTempHigh } from "react-icons/ci";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "sonner";

const Seeds = () => {
  const [seedInv, setSeedInv, history, setHistory] = useOutletContext();
  const nagivate = useNavigate();
  const increase = (id, amount) => {
    const item = seedInv.find((item) => item.id === id);

    const updatedVolume = item.volume + amount;
    if (updatedVolume > item.capacity) {
      toast.error("Capacity limit reached");
      return;
    }

    // Create a transaction object
    const currentDate = new Date();
    const transaction = {
      id: currentDate.getTime(),
      type: "increase",
      itemId: id,
      amount: amount,
      timestamp: {
        date: currentDate.toDateString(), // Extract date
        time: currentDate.toTimeString(), // Extract time
      },
    };

    // Append transaction to history
    setHistory([...history, transaction]);

    const updatedSeedInv = seedInv.map((item) =>
      item.id === id ? { ...item, volume: updatedVolume } : item
    );
    setSeedInv(updatedSeedInv);
  };

  const onIncreaseSubmit = (e, id) => {
    e.preventDefault();
    const amount = parseInt(e.target.elements.amount.value);

    if (!isNaN(amount) && amount > 0) {
      increase(id, amount);
      e.target.elements.amount.value = "";
    }
  };

  const decrease = (id, amount) => {
    const item = seedInv.find((item) => item.id === id);

    const updatedVolume = item.volume - amount;
    if (updatedVolume < 0) {
      toast.error("Volume cannot be less than zero");
      return;
    }

    // Create a transaction object
    const currentDate = new Date();
    const transaction = {
      id: currentDate.getTime(),
      type: "decrease",
      itemId: id,
      amount: amount,
      timestamp: {
        date: currentDate.toDateString(), // Extract date
        time: currentDate.toTimeString(), // Extract time
      },
    };

    // Append transaction to history
    setHistory([...history, transaction]);

    const updatedSeedInv = seedInv.map((item) =>
      item.id === id ? { ...item, volume: updatedVolume } : item
    );
    setSeedInv(updatedSeedInv);
  };

  const onDecreaseSubmit = (e, id) => {
    e.preventDefault();
    const amount = parseInt(e.target.elements.amount.value);
    if (!isNaN(amount) && amount > 0) {
      decrease(id, amount);
      e.target.elements.amount.value = "";
    }
  };

  return (
    <>
      {/* CONTAINER */}
      <div className="space-y-4">
        {/* DATA */}
        {seedInv.map((item) => (
          <div className="flex gap-4" key={item.id}>
            <div className=" bg-secondary text-white font-bold text-2xl flex items-center justify-center w-56 shadow-xl rounded-xl">
              {item.name}
            </div>
            <div className="flex-1 border-2 rounded-xl shadow-xl p-3">
              <hr className="mb-2" />
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
              {/* BAR/CAPACITY */}
              <progress
                className={`progress ${
                  item.volume / item.capacity < 0.3 ? "progress-error" : ""
                } h-7 mt-2 progress-success w-[100%]`}
                value={item.volume}
                max={item.capacity}
              ></progress>
              <hr className="my-2" />
              {/* INFORMATION */}
              <div>
                <h1 className="my-1 font-medium">
                  Warehouse: <span className="font-bold">{item.warehouse}</span>
                </h1>
                <h1 className="my-1 font-medium">
                  Max Capacity:{" "}
                  <span className="font-bold">{item.capacity} kg</span>
                </h1>
                <h1 className="my-1 font-medium">
                  Current Capacity:{" "}
                  <span className="font-bold">{item.volume} kg</span>
                </h1>
                <div className="flex items-center gap-3">
                  <form onSubmit={(e) => onIncreaseSubmit(e, item.id)}>
                    <input
                      type="number"
                      className="input input-bordered rounded-r-none w-32"
                      placeholder="Amount"
                      required
                      name="amount"
                    />
                    <button className="btn text-white bg-secondary hover:bg-secondary border-none uppercase mt-1 rounded-l-none">
                      Add
                    </button>
                  </form>
                  <form onSubmit={(e) => onDecreaseSubmit(e, item.id)}>
                    <input
                      type="number"
                      className="input input-bordered rounded-r-none w-32"
                      placeholder="Amount"
                      required
                      name="amount"
                    />
                    <button className="btn text-white bg-secondary hover:bg-secondary border-none uppercase mt-1 rounded-l-none">
                      Remove
                    </button>
                  </form>
                  <button
                    className="btn bg-primary text-white hover:bg-primary border-none"
                    onClick={() => nagivate(`/history/${item.id}`)}
                  >
                    History
                  </button>
                </div>
              </div>
              <hr className="mt-2" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Seeds;
