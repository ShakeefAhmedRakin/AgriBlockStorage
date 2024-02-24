import { useOutletContext } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";

const Equipments = () => {
  const [seedInv, setSeedInv, history, setHistory, machines, setMachines] =
    useOutletContext();

  const [loaned, setLoaned] = useState(false);

  const addMachine = (e) => {
    e.preventDefault();

    // Accessing form elements
    const form = e.target;
    const name = form.elements["name"].value;
    const quantity = form.elements["quantity"].value;
    const status = form.elements["status"].value;
    const availability = form.elements["availability"].value;
    const loandate = form.elements["loandate"]
      ? form.elements["loandate"].value
      : null;
    const returndate = form.elements["returndate"]
      ? form.elements["returndate"].value
      : null;
    const location = form.elements["location"]
      ? form.elements["location"].value
      : null;

    const loaned = status === "owned" ? false : true;

    const data = {
      id: machines.length + 1,
      name: name,
      loaned: loaned,
      loandetails: {
        taken: loandate,
        return: returndate,
        location: location,
      },
      availability: availability,
      quantity: quantity,
    };
    setMachines([...machines, data]);
  };

  return (
    <>
      <div className="">
        <div className="rounded-lg shadow-lg border-2 p-3">
          <h1 className="text-center font-bold uppercase text-xl rounded-t-md bg-primary text-white p-2 relative">
            Equipments{" "}
            <button
              onClick={() =>
                document.getElementById("machinemodal").showModal()
              }
              className="absolute btn right-[5px] top-[13%] btn-sm bg-white text-secondary border-none hover:bg-white"
            >
              Add <IoMdAdd />
            </button>
          </h1>
          <hr className="my-2" />
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Availability</th>
                </tr>
              </thead>
              <tbody>
                {machines.map((machine) => (
                  <tr key={machine.id}>
                    <td>{machine.id}</td>
                    <td>{machine.name}</td>
                    <td>{machine.quantity}</td>
                    <td className="whitespace-nowrap">
                      {!machine.loaned ? (
                        <span className="text-green-500 font-bold">Owned</span>
                      ) : (
                        <p className="text-red-500 font-bold">
                          Loaned:{" "}
                          <span className="text-black">
                            {machine.loandetails.taken}
                          </span>{" "}
                          <br />
                          Return By:{" "}
                          <span className="text-black">
                            {machine.loandetails.return}
                          </span>{" "}
                          <br />
                          Location:{" "}
                          <span className="text-black">
                            {machine.loandetails.location}
                          </span>
                        </p>
                      )}
                    </td>
                    <td
                      className={`font-bold ${
                        machine.availability === "In Use"
                          ? "text-orange-400"
                          : ""
                      } ${
                        machine.availability === "Maintenance"
                          ? "text-red-400"
                          : ""
                      } ${
                        machine.availability === "Idle" ? "text-green-400" : ""
                      }`}
                    >
                      {machine.availability}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <dialog id="machinemodal" className="modal">
        <div className="modal-box">
          <form className="space-y-4" onSubmit={addMachine}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Machine Name
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Machine Name"
                required
              />
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  placeholder="Machine Quantity"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Status
                </label>
                <select
                  name="status"
                  onChange={(e) => {
                    if (e.target.value === "loaned") {
                      setLoaned(true);
                    } else {
                      setLoaned(false);
                    }
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                >
                  <option value="owned" defaultValue>
                    Owned
                  </option>
                  <option value="loaned">Loaned</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Availability
                </label>
                <select
                  name="availability"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 d"
                >
                  <option value="In Use" defaultValue>
                    In Use
                  </option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Idle">Idle</option>
                </select>
              </div>
            </div>
            {loaned ? (
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Loaned Date
                  </label>
                  <input
                    type="date"
                    name="loandate"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Machine Name"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Return Date
                  </label>
                  <input
                    type="date"
                    name="returndate"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Machine Name"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Machine Name"
                    required
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
            <button className="btn w-full bg-primary text-white hover:bg-primary">
              Add
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Equipments;
