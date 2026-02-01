import React from "react";

function AppCard({ image, heading, text, bullets, buttonText }) {
  return (
    <div className="relative flex gap-12 bg-white px-10 py-8">
      <div className="flex-shrink-0">
        <img
          src={image}
          alt=""
          className="w-[420px] rounded-xl"
        />
      </div>

      <div className="flex flex-col justify-start pt-1">
        <h3 className="mb-3 text-base font-semibold text-gray-900">
          {heading}
        </h3>

        <p className="mb-5 max-w-xl text-sm leading-[1] text-gray-500">
          {text}
        </p>

        <ul className="mb-7 space-y-2 text-sm text-gray-700">
          {bullets.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-700"></span>
              <span className="leading-[1]">{item}</span>
            </li>
          ))}
        </ul>

        <button className="w-fit rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default AppCard;
