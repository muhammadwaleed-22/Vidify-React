import React from "react";
import { Link, NavLink } from "react-router-dom";
import { salesChannels, salesChannels2 } from "./Data/config";

function Sidebar() {
  return (
    <div className="w-[260px] h-full px-3 py-0 flex flex-col">
      
      <div className="space-y-1">
        {salesChannels.map(([label, icon, path]) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-1 rounded-md transition ${
                isActive ? "" : "hover:bg-white"
              }`
            }
          >
            <img
              src={`/images/${icon}`}
              alt={label}
              className="w-[18px] h-[18px]"
            />
            <span className="text-sm text-gray-800">{label}</span>
          </NavLink>
        ))}
      </div>

      
      <div className="mt-6 text-xs text-gray-500 px-2">
        Sales channels
      </div>
      <div className="mt-2 space-y-0.5">
        {salesChannels2.map(([label, icon]) => (
          <div
            key={label}
            className="flex items-center justify-between px-2 py-1 rounded-md hover:bg-white cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <img
                src={`/images/${icon}`}
                alt={label}
                className="w-[18px] h-[18px]"
              />
              <span className="text-sm text-gray-800">{label}</span>
            </div>
            <span className="text-gray-400">{">"}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 text-xs text-gray-500 px-2">Apps</div>
      <div className="mt-2 space-y-1">
        <div className="flex items-center gap-3 px-2 py-1 rounded-md bg-white">
          <img
            src="/images/lock.png"
            alt="Vidify"
            className="w-[18px] h-[18px]"
          />
          <span className="text-sm text-gray-800">Vidify</span>
        </div>

        <Link
          to="/generate-video"
          className="ml-8 text-sm text-gray-600 py-1 cursor-pointer hover:text-gray-900 transition"
        >
          Generate Video
        </Link>

        <div >
          <Link
          to="/pricing-plan"
          className="ml-8 text-sm text-gray-600 py-1 cursor-pointer hover:text-gray-900 transition"
        >
          Subscription Plan
        </Link>
        </div>
        

        <div className="flex items-center gap-3 px-2 py-1 rounded-md hover:bg-white cursor-pointer">
          <img
            src="/images/sett.png"
            alt="Setting"
            className="w-[18px] h-[18px]"
          />
          <span className="text-sm text-gray-800">Setting</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
