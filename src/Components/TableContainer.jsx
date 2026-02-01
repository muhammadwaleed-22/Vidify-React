import React, { useState } from "react";
import TableOne from "./TableOne";
import TableTwo from "./TableTwo";

function TableContainer() {
  const [activeTab, setActiveTab] = useState("view");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

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
      <div className="flex items-center justify-between px-6 py-4 gap-2">
        <div>
          <div className="flex justify-between">
            <button
              onClick={() => setActiveTab("generate")}
              className={`px-3 py-1.5 text-sm font-medium rounded-md ${activeTab === "generate"
                  ? "bg-[#EBEBEB] text-black"
                  : "bg-white text-gray-600"
                }`}
            >
              Generate AI Videos
            </button>
            <button
              onClick={() => setActiveTab("view")}
              className={`px-3 py-1.5 text-sm font-medium rounded-md  ${activeTab === "view"
                  ? "bg-gray-100 text-black"
                  : "bg-white text-gray-600"
                }`}
            >
              View AI Videos
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 text-gray-500 ">
            <span className="cursor-pointer">🔎</span>
            <span className="cursor-pointer">☰</span>
          </div>
        </div>
      </div>

      {activeTab === "generate" && <TableOne openModal={openModal} />}
      {activeTab === "view" && <TableTwo openModal={openModal} />}

      {isModalOpen && selectedRow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-1xl p-6">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <h3 className="text-lg font-medium text-gray-900">
                Make AI Video
              </h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className="mt-6">
              <p>Modal for {selectedRow.Product}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TableContainer;