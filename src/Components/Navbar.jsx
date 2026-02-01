import React from "react";

function Navbar() {
  return (
    <>
      <div className="w-full h-[56px] bg-gradient-to-b from-[#2d2d2d] to-[#1f1f1f] flex items-center px-4">
        <div className="flex items-center w-3/12">
          <img src="/images/logo.png" alt="Shopify" className="h-[22px]" />
        </div>

        <div className="w-6/12 flex justify-center">
          <div className="flex items-center w-full max-w-[520px] bg-[#3a3a3a] rounded-md px-3 py-1">
            <img
              src="/images/search.png"
              alt="Search"
              className="w-[14px] h-[14px] mr-2 opacity-70"
            />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full text-sm text-white placeholder-gray-300 outline-none"
            />
          </div>
        </div>

        <div className="w-3/12 flex items-center justify-end gap-3">
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#3a3a3a]">
            <img
              src="/images/fcc.png"
              alt="Help"
              className="w-[16px] h-[16px]"
            />
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#3a3a3a]">
            <img
              src="/images/bell.png"
              alt="Notifications"
              className="w-[16px] h-[16px]"
            />
          </button>

          <button className="flex items-center gap-2 bg-[#3a3a3a] px-3 py-1 rounded-md">
            <span className="text-sm text-white">Stellar Interiors</span>
            <img
              src="/images/chair.png"
              alt="Profile"
              className="w-[22px] h-[22px] rounded"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 pt-5 pl-60 bg-[#f6f6f7] ">
        <img src="/images/lock.png" alt="Vidify" className="w-6 h-6" />
        <span className="text-sm font-medium text-gray-800">Vidify</span>
      </div>
    </>
  );
}

export default Navbar;
