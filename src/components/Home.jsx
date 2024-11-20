import React from "react";
import { PiAirplaneTakeoff } from "react-icons/pi";
import { GiAirplaneArrival } from "react-icons/gi";

const Home = () => {
  return (
    <>
      <section className="shadow-md xl:px-20 py-16 bg-[#83D450] flex flex-col">
        <div className="container mx-auto text-center">
          {/* Laptop and Tablet View */}
          <div className="hidden md:flex flex-col items-center">
            {/* Top Banner */}
            <div className="flex flex-row gap-6 justify-center items-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-black p-4 rounded-full outline outline-slate-300 shadow-2xl">
                GET UP TO £1,040
              </h3>
              <h3 className="text-2xl lg:text-3xl font-bold text-black p-4 rounded-3xl bg-[#C0E9A6] shadow-2xl cursor-pointer">
                Per Couple
              </h3>
            </div>

            {/* Main Content */}
            <div className="mt-8 flex flex-row items-center justify-center gap-8 bg-white px-6 py-4 shadow-2xl rounded-full">
              <div className="flex items-center gap-2 text-black font-semibold">
                <span className="text-3xl">
                  <PiAirplaneTakeoff />
                </span>
                <p>Departure Airport</p>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="flex items-center gap-2 text-black font-semibold">
                <span className="text-3xl">
                  <GiAirplaneArrival />
                </span>
                <p>Final Destination Airport</p>
              </div>
              <button className="px-6 py-3 bg-[#F15E6B] text-white rounded-3xl shadow-2xl hover:bg-[#d54453] transition">
                Check Your Compensation
              </button>
            </div>
          </div>

          {/* Mobile View */}
          <div className="flex flex-col md:hidden items-center mt-6">
            {/* Top Banner */}
            <h3 className="relative inline-block text-black font-bold text-2xl sm:text-3xl px-6 py-4 border border-white rounded-full bg-[#83D450] text-center">
              <span className="block">
                GET UP TO <span className="text-black">£1,040</span>
              </span>
              <span className="absolute -bottom-3 right-3 sm:bottom-1 sm:right-8 text-sm sm:text-base text-black font-medium px-2">
                Per Couple
              </span>
              <div className="absolute border-white border-2 w-full h-full rounded-full top-0 left-0 transform scale-100"></div>
            </h3>

            {/* Main Content */}
            <div className="mt-6 flex flex-col items-center gap-6">
              <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-3xl shadow-lg">
                <span className="text-3xl">
                  <PiAirplaneTakeoff />
                </span>
                <p>Departure Airport</p>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-3xl shadow-lg">
                <span className="text-3xl">
                  <GiAirplaneArrival />
                </span>
                <p>Final Destination Airport</p>
              </div>
              <button className="px-8 py-3 bg-[#F15E6B] text-white rounded-3xl shadow-2xl hover:bg-[#d54453] transition">
                Check Your Compensation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
