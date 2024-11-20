import React from "react";
import claim1 from "../assets/claim1.png";
import claim2 from "../assets/claim2.png";
import claim3 from "../assets/claim3.png";
import claim4 from "../assets/claim4.png";
import Frame from "../assets/Frame.png";
import Image1 from "../assets/Image1.png";

const Claim = () => {
  return (
    <div className="bg-white">
      <div className="text-black p-6 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          <span className="text-blue-600">Air travel</span>
          <span className="text-red-400"> claim</span> is an air-passenger
        </h1>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">
          disruption claims company
        </h1>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">
          we fight for air passenger rights
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#83D450] text-black p-10 pb-20 rounded-xl shadow-lg max-w-4xl mx-auto">
        <div className="text-center mb-5 -mt-5">
          <h1 className="font-bold text-3xl sm:text-4xl">
            Free to check. Only takes 2 minutes.
          </h1>
          <p className="text-sm font-semibold sm:text-base">
            Protecting the rights of airline passengers: UK261 & EU261
          </p>
        </div>

        <div className="flex items-center justify-between w-full flex-wrap sm:flex-row">
          <div className="flex flex-col items-center text-center mb-5 sm:mb-0">
            <div className="bg-black rounded-full p-3">
              <img className="w-8 h-8" src={claim1} alt="Free Flight Check" />
            </div>
            <p className="mt-2 text-sm sm:text-base">Free Flight Check</p>
          </div>

          <div className="h-px bg-black flex-1 mx-2 mb-5 sm:mb-0"></div>

          <div className="flex flex-col items-center text-center mb-5 sm:mb-0">
            <div className="bg-black rounded-full p-3">
              <img className="w-8 h-8" src={claim2} alt="Claim up to £520" />
            </div>
            <p className="mt-2 text-sm sm:text-base">Claim up to £520</p>
          </div>

         
          <div className="h-px bg-black flex-1 mx-2 mb-5 sm:mb-0"></div>

        
          <div className="flex flex-col items-center text-center mb-5 sm:mb-0">
            <div className="bg-black rounded-full p-3">
              <img className="w-8 h-8" src={claim3} alt="No win, No fee" />
            </div>
            <p className="mt-2 text-sm sm:text-base">No win, No fee</p>
          </div>

       
          <div className="h-px bg-black flex-1 mx-2 mb-5 sm:mb-0"></div>

       
          <div className="flex flex-col items-center text-center mb-5 sm:mb-0">
            <div className="bg-black rounded-full p-3">
              <img
                className="w-8 h-8"
                src={claim4}
                alt="Claim for last 6 years"
              />
            </div>
            <p className="mt-2 text-sm sm:text-base">Claim for last 6 years</p>
          </div>

       
          <div className="h-px bg-black flex-1 mx-2 mb-5 sm:mb-0"></div>

        
          <div className="flex items-center">
            <img className="w-10 h-10" src={Frame} alt="Plane Icon" />
          </div>
        </div>
      </div>

      <div className="text-center mt-8 px-4">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          We help you claim what is rightfully yours!
        </h1>
        <h1 className="text-xl font-normal sm:text-2xl mt-4">
          Most airlines avoid paying your compensation which is in addition to
          your ticket refund!
        </h1>
        <h1 className="font-normal mt-4">
          Under regulations UK261 and EU261, you could be entitled to up to
          £1,040 per couple for a flight disruption.
        </h1>
        <h1 className="text-red-400 font-semibold mt-4">
          We fight on your behalf!
        </h1>
        <div className="flex justify-center items-center my-2">
          <div className="border-b border-blue-500 w-1/4"></div>
        </div>
        <h1 className="text-blue-600 font-semibold mt-4">
          It's No Win No Fee! Claim For The Last 6 Years.
        </h1>
        <div className="flex justify-center items-center mt-2">
          <div className="border-b border-blue-500 w-1/4"></div>
        </div>
      </div>

      {/* Claim Options */}
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {/* Card 1 */}
        <div className="py-11 px-11 bg-[#83D450] rounded-2xl pb-4 pr-8 w-full sm:w-[280px]">
          <div>
            <p className="font-bold text-2xl -ml-5 translate-x-1 translate-y-8">
              Flight Cancelled?
            </p>
            <p className="font-semibold -ml-5 translate-x-1 translate-y-11">
              Flight cancelled within 14 days <br /> of departure?
            </p>
            <button className="py-2 px-3 rounded-2xl bg-black text-white mt-16 -ml-5">
              Start Your Claim
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="py-11 px-11 bg-black rounded-2xl pb-4 pr-8 text-white w-full sm:w-[280px]">
          <div>
            <p className="font-bold text-2xl -ml-5 translate-x-1 translate-y-8">
              Flight Delayed?
            </p>
            <p className="font-semibold -ml-5 translate-x-1 translate-y-11">
              Was your flight delayed by 3 <br /> hours or more?
            </p>
            <button className="py-2 px-3 rounded-2xl bg-[#83D450] text-black font-semibold mt-16 -ml-5">
              Start Your Claim
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="py-11 px-11 bg-[#83D450] rounded-2xl pb-4 pr-8 w-full sm:w-[280px]">
          <div>
            <p className="font-bold text-2xl -ml-5 translate-x-1 translate-y-8">
              Denied Boarding?
            </p>
            <p className="font-semibold -ml-5 translate-x-1 translate-y-11">
              Did you turn up on time but <br /> your flight was full?
            </p>
            <button className="py-2 px-3 rounded-2xl bg-black text-white mt-16 -ml-5">
              Start Your Claim
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="py-11 px-11 bg-black text-white rounded-2xl pb-4 pr-6 w-full sm:w-[280px]">
          <div>
            <p className="font-bold text-2xl -ml-5 translate-x-1 translate-y-8">
              Connection Problems?
            </p>
            <p className="font-semibold -ml-5 translate-x-1 translate-y-11">
              Did you miss a connecting <br /> flight?
            </p>
            <button className="py-2 px-3 rounded-2xl bg-[#83D450] text-black font-semibold mt-16 -ml-5">
              Start Your Claim
            </button>
          </div>
        </div>
      </div>

      {/* Banner Image  */}
      <div className="shadow-md xl:px-20 bg-[#83D450] flex items-center justify-between mt-16 px-4 sm:px-16">
        {/* Left Text Content */}
        <div className="flex-col ">
          <p className="text-black text-xl font-medium sm:text-2xl ml-12">
            If you have suffered a flight disruption in the last <br />
            6 years, then under regulations UK261 and <br />
            EU261 you could be eligible to claim up to <br />
            £1,040 in compensation per couple.
          </p>
          <button className="py-2 px-6 ml-12 rounded-full bg-black text-white font-semibold">
            Start Your Claim
          </button>
        </div>

       
        <img
          src={Image1}
          alt="Travelers with luggage"
          className="w-1/3 h-auto object-contain -mt-8 relative z-10"
        />
      </div>
    </div>
  );
};

export default Claim;
