import React from 'react'

function Hero() {
  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 p-6 max-w-5xl">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold text-gray-900">
                Video Generator
              </h2>
              <img src="/images/i.png" alt="Info" className="w-4 h-4" />
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Current Plan: Explorer – 2 AI Videos / Month
            </p>
            <p className="text-xs text-gray-600 mt-1">0/2 Videos</p>
          </div>

          <button className="border border-gray-300 text-sm px-3 py-1 rounded-md hover:bg-gray-100">
            Upgrade your plan
          </button>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-[70%] bg-emerald-600 rounded-full" />
        </div>
      </div>
    </>
  )
}

export default Hero