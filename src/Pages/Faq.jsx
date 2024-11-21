import React, { useState } from "react";
import gift from "../assets/gift.png";
import Aircraft from '../assets/Aircraft.png'

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index); // Toggle logic to open/close FAQ
  };

  return (
    <section className="mr-0 p-0">
      <div className="bg-[#83D450] py-12 px-10 text-center mt-20">
        <div className="relative max-w-4xl mx-auto">
          <h1 className="font-bold text-4xl text-black mb-6">
            Let’s answer some of your <br /> questions.
          </h1>
          <p className="text-black mb-12">
            Travellers banking on timely flights for holidays or homecomings may
            encounter delays or cancellations. However, passengers can find
            solace in the broad compensation rights available for such
            disruptions. For further clarity on these compensation rights,
            please visit our Frequently Asked Questions (FAQs) page.
          </p>

          {/* FAQ Section */}
          <div className="bg-white rounded-3xl shadow-lg p-6 -mt-5 absolute">
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-lg font-semibold text-left"
                  onClick={() => toggle(0)}
                >
                  How much compensation am I entitled to for my flight?
                  <span className="ml-2">
                    {open === 0 ? (
                      <span className="text-gray-600">−</span> // Minus symbol for expanded state
                    ) : (
                      <span className="text-gray-600">+</span> // Plus symbol for collapsed state
                    )}
                  </span>
                </button>
                <div
                  className={`mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
                    open === 0 ? "h-auto" : "h-0"
                  }`}
                >
                  <p className="text-gray-700">
                    The amount of the compensation claim depends on the length
                    of the flightpath. How much you paid for the ticket is
                    irrelevant for the compensation. Under the UK Regulations
                    for short-haul flights (less than 1,500 kilometres), you are
                    entitled to compensation of £220 per person or up to £440
                    per couple. For medium-haul flights (up to 3,500 kilometres)
                    you are entitled to £350 or £700 per couple. For long-haul
                    flights (over 3,500 kilometres), the possible compensation
                    amount increases to £520 or £1,040 per couple.
                  </p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-lg font-semibold text-left"
                  onClick={() => toggle(1)}
                >
                  What am I entitled to in event of a flight delay?
                  <span className="ml-2">
                    {open === 1 ? (
                      <span className="text-gray-600">−</span> // Minus symbol for expanded state
                    ) : (
                      <span className="text-gray-600">+</span> // Plus symbol for collapsed state
                    )}
                  </span>
                </button>
                <div
                  className={`mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
                    open === 1 ? "h-auto" : "h-0"
                  }`}
                >
                  <p className="text-gray-700">
                    Passengers are entitled to meals, refreshments, and
                    accommodation based on the length of the delay, as well as
                    compensation depending on the duration and the flight
                    distance. For delays over 3 hours, compensation is possible
                    under European regulations.
                  </p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-lg font-semibold text-left"
                  onClick={() => toggle(2)}
                >
                  What are my rights?
                  <span className="ml-2">
                    {open === 2 ? (
                      <span className="text-gray-600">−</span> // Minus symbol for expanded state
                    ) : (
                      <span className="text-gray-600">+</span> // Plus symbol for collapsed state
                    )}
                  </span>
                </button>
                <div
                  className={`mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
                    open === 2 ? "h-auto" : "h-0"
                  }`}
                >
                  <p className="text-gray-700">
                    Under EU and UK regulations, your rights include the right
                    to compensation in the event of significant delays,
                    cancellations, or overbooking. Passengers may also be
                    entitled to assistance such as meals, drinks, accommodation,
                    and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#163300] pb-11 pt-0 p-10 rounded-3xl shadow-lg max-w-4xl mx-auto mt-64 relative">
        <div className="flex-1 pr-8 translate-y-8  flex-col justify-center">
          {" "}
          {/* Text Container */}
          <h1 className="text-white text-4xl font-normal leading-tight tracking-tight drop-shadow-md">
            REFER & EARN!
          </h1>
          <h3 className="text-white text-6xl font-bold my-2">€50</h3>
          <p className="text-white text-lg mb-6">
            Refer Your Friends and Family and Earn £50
          </p>
          <button className="bg-red-400 text-white py-2 px-6 rounded-full">
            Refer Now
          </button>
          <div className="flex -mt-8">
            <img
              className="h-64 w-auto -mt-52 ml-[7rem]"
              src={gift}
              alt="Gift items"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-12 mx-20">
      <div className="ml-60">
        <h1 className="font-semibold text-2xl leading-relaxed mb-5">
          Flight delays and cancellations <br />
          are more common than you'd <br />
          think and affect thousands of <br />
          people.
        </h1>
        <button className="py-2 px-6 bg-[#83D450] rounded-2xl text-white font-bold text-center">
          Start Your Claim
        </button>
      </div>
      <div className="mr-52">
        <img className="w-[450px]" src={Aircraft} alt="Aircraft" />
      </div>
    </div>
    </section>
  );
};

export default Faq;
