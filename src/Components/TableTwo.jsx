import React, { useEffect, useState } from "react";
import tableData from "./Data/DataTwo.json";
import TableOne from "./TableOne";

const statusStyles = {
  Active: "bg-green-100 text-green-700",
};

const progressStyles = {
  "In Progress": "bg-blue-100 text-blue-700",
  Completed: "bg-green-100 text-green-700",
};

function TableTwo() {
  const [rows, setRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [activeTab, setActiveTab] = useState("view"); 

  useEffect(() => {
    setRows(tableData);
  }, []);

  const openModal = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  return (
    <div className="mt-6 bg-white rounded-xl border border-gray-200">

      {activeTab === "generate" && <TableOne />}


      {activeTab === "view" && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-500 border-b">
                <th className="px-6 py-3 text-left font-medium">Product</th>
                <th className="py-3 text-left font-medium">Images</th>
                <th className="py-3 text-left font-medium">Status</th>
                <th className="py-3 text-left font-medium">AI Videos</th>
                <th className="py-3 text-left font-medium">Date</th>
                <th className="py-3 text-left font-medium">Progress</th>
                <th className="px-6 py-3 text-right font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className=" last:border-none hover:bg-gray-50">
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={`/images/${row.Thambnail}`}
                        alt={row.Product}
                        className="w-9 h-9 rounded-md object-cover"
                      />
                      <span className="font-medium text-gray-900">
                        {row.Product}
                      </span>
                    </div>
                  </td>

                  <td className="text-gray-600">{row.Images}</td>

                  <td>
                    <span
                      className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                        statusStyles[row.Status]
                      }`}
                    >
                      {row.Status}
                    </span>
                  </td>

                  <td className="text-gray-700">{row.AIVideos}</td>

                  <td className="text-gray-600">{row.Date}</td>

                  <td>
                    <span
                      className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                        progressStyles[row.Progress]
                      }`}
                    >
                      {row.Progress}
                    </span>
                  </td>

                  <td className="px-6 py-3 text-right">
                    <button onClick={() => openModal(row)}>
                      <img
                        src={`/images/${row.Action}`}
                        alt=""
                        className="inline-block w-10 h-10 rounded-md object-cover transition"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}


      {isModalOpen && selectedRow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative bg-white rounded-xl shadow-lg w-full max-w-2xl p-6">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <h3 className="text-lg font-medium text-gray-900">
                Make AI Video
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Select Product Images</h3>

              <div className="flex gap-4 overflow-x-auto mb-6">
                {["m1.png", "m2.png", "m3.png", "m4.png", "m5.png"].map(
                  (img, idx) => (
                    <div
                      key={idx}
                      className="border rounded-lg p-1 w-full cursor-pointer border-gray-300"
                    >
                      <img
                        src={`/images/${img}`}
                        alt={`Product ${idx + 1}`}
                        className="w-[104px] h-[104px]"
                      />
                    </div>
                  )
                )}
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold mb-2">Select Start Image</h3>
                  <div className="rounded-lg p-2 bg-gray-50 h-[200px] flex items-center justify-center">
                    <img src="/images/m6.png" alt="" className="mt-5 w-56" />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">
                    Select End Image (Optional)
                  </h3>
                  <div className="rounded-lg p-2 bg-gray-50 h-[200px] flex items-center justify-center ">
                    <img src="/images/m7.png" alt="" className="w-56 mt-5" />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-semibold mb-2">
                  Video Prompt (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Share your vision in a few clear words"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800">
                  Generate AI Video
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TableTwo;