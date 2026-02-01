import React from "react";
import { Link } from "react-router-dom";

function FeatureCard({ image, heading, text, buttonText, icon }) {
  return (
    <div className="flex items-center justify-between gap-1 rounded-2xl bg-gradient-to-r from-violet-50 to-white shadow-lg max-w-6xl mx-auto p-6">
      
      <div className="flex-1 flex justify-center">
        <img src={image} alt="feature" className="w-100" />
      </div>

      <div className="flex-[1.2]">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          {heading}
        </h2>

        <p className="text-gray-600 text-[13px] leading-relaxed mb-6">
          {text}
        </p>


        <Link
          to="/generate-video"
          className="inline-flex items-center text-gray-900 border border-gray-300 px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
        >
          <img src={icon} alt="" className="w-5 h-5 mr-2" />
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default FeatureCard;
