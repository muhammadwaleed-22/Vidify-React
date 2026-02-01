import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";

function PpBody() {
  return (
    <>
      <div className="pl-8 pt-8"> 
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">
        Power Up Your Store With Premium Features
      </h1>
      <p className="text-sm text-gray-600 mb-8">
        Choose a pricing plan that meets your needs!
      </p>
      </div>
      <div className="w-full bg-gray-100 p-6 pt-0">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-white p-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">Free</h3>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                  Active
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Make 2 AI videos per month
              </p>
            </div>
            <button className="cursor-not-allowed rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-500">
              Choose Free
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-300 bg-white p-6 text-center">
              <h3 className="font-semibold">Creator</h3>
              <p className="mt-1 text-sm text-gray-500">20 videos per month</p>
              <p className="mt-4 text-2xl font-bold">
                $20<span className="text-sm font-medium text-gray-500">/M</span>
              </p>
              <button className="mt-6 w-full rounded-md px-4 py-2 border border-gray-300 text-sm font-medium hover:bg-gray-50">
                Choose Creator Plan
              </button>
            </div>

            <div className="rounded-lg border border-gray-300 bg-white p-6 text-center shadow-md">
              <h3 className="font-semibold">Scale</h3>
              <p className="mt-1 text-sm text-gray-500">40 videos per month</p>
              <p className="mt-4 text-2xl font-bold">
                $40<span className="text-sm font-medium text-gray-500">/M</span>
              </p>
              <button className="mt-6 w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900">
                Choose Scale Plan
              </button>
            </div>

            <div className="rounded-lg border border-gray-300 bg-white p-6 text-center">
              <h3 className="font-semibold">Mastery</h3>
              <p className="mt-1 text-sm text-gray-500">60 videos per month</p>
              <p className="mt-4 text-2xl font-bold">
                $60<span className="text-sm font-medium text-gray-500">/M</span>
              </p>
              <button className="mt-6 w-full rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50">
                Choose Mastery Plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PpBody;
