import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import TableContainer from "./TableContainer";

function TableData() {
  return (
    <div className="w-full min-h-screen bg-[#f6f6f7] px-10 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-10">
        Video Generation
      </h1>
      <Hero />
      <TableContainer />
      <Footer />
    </div>
  );
}

export default TableData;
