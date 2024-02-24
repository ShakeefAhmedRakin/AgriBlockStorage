import { useOutletContext, useParams } from "react-router-dom";

const History = () => {
  const { id } = useParams();
  const intId = parseInt(id);
  const [seedInv, setSeedInv, history, setHistory] = useOutletContext();

  if (!seedInv.some((item) => item.id === intId)) {
    return (
      <div className="flex justify-center h-screen items-center text-2xl font-bold text-red-500">{`Resource does not exist`}</div>
    );
  }

  const filteredHistory = history.filter((record) => record.itemId === intId);
  filteredHistory.sort((a, b) => {
    // Extracting timestamps
    const timestampA = new Date(`${a.timestamp.date} ${a.timestamp.time}`);
    const timestampB = new Date(`${b.timestamp.date} ${b.timestamp.time}`);

    // Comparing timestamps
    return timestampB - timestampA;
  });

  if (filteredHistory.length <= 0) {
    return (
      <div className="flex justify-center h-screen items-center text-2xl font-bold text-red-500">{`No Records`}</div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th className="text-lg">Resource</th>
              <th className="text-lg">Date</th>
              <th className="text-lg">Time</th>
              <th className="text-lg">Type</th>
              <th className="text-lg">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory.map((record) => (
              <tr key={record.id}>
                <td className="text-lg">
                  {seedInv.find((item) => item.id === record.itemId)?.name}
                </td>
                <td className="text-lg">{record.timestamp.date}</td>
                <td className="text-lg">{record.timestamp.time}</td>
                <td
                  className={`font-medium text-lg ${
                    record.type === "increase"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {record.type === "increase" ? "Increased" : "Decreased"}
                </td>
                <td className="font-bold text-lg">{record.amount} kg</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default History;
