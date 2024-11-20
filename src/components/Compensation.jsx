import React from "react";  
import comp from "../assets/comp.png";  
import { FaThumbsUp, FaRegEdit, FaSearch, FaDesktop, FaCog, FaUserTie, FaMoneyCheckAlt, FaEnvelopeOpenText, FaBalanceScale } from 'react-icons/fa';  

const benefits = [  
  { icon: <FaThumbsUp size={28} />, label: 'No Win – No Fee & no upfront cost' },  
  { icon: <FaRegEdit size={28} />, label: 'Simple online form to start your claim' },  
  { icon: <FaSearch size={28} />, label: 'Free to check plagiarism' },  
  { icon: <FaDesktop size={28} />, label: 'Straightforward claim process' },  
  { icon: <FaCog size={28} />, label: 'Technology to confirm the validity of your claim' },  
  { icon: <FaUserTie size={28} />, label: 'Experienced Specialists' },  
  { icon: <FaMoneyCheckAlt size={28} />, label: 'Court fees are paid on your behalf' },  
  { icon: <FaEnvelopeOpenText size={28} />, label: 'A formal letter of claim to the airline' },  
  { icon: <FaBalanceScale size={28} />, label: 'Professionally drafted particulars of claim and court documents' },  
];  

const Compensation = () => {  
  return (  
    <div className="container">  
      <div className="bg-[#83D450] size-full pb-10 py-44 mt-20">  
        <div>  
          <h1 className="text-4xl font-bold translate-x-16 -mt-32">  
            When things don’t go <br />  
            according to plan with your <br />  
            flight, our specialists are <br />  
            here to help you.  
          </h1>  
          <p className="font-normal translate-x-16 mt-5">  
            If you have suffered a flight delay, had your flight cancelled{" "}  
            <br />  
            within 14 days of departure, had your flight re-routed, or you{" "}  
            <br />  
            were denied boarding, you may be able to claim up to <br />  
            £1,040 per couple in flight compensation. Airlines have <br />  
            been cancelling thousands of flights. Have you been <br />  
            affected? We can help you get compensation!  
          </p>  
          <button className="mt-5 bg-black py-2 px-3 text-white rounded-3xl ml-16">  
            Start Your Claim  
          </button>  
        </div>  
        <img   
          className="lg:w-1/6 -mt-80 lg:ml-auto mr-auto object-contain h-auto relative z-10"   
          src={comp}   
          alt=""   
        />  
      </div>  
      <div className="bg-green-950 w-auto py-4 px-6 lg:px-26 mt-10 mx-4 lg:mx-56 rounded-3xl text-white">  
        <h1 className="text-4xl font-bold text-center mb-10">  
          Benefits of using <br />  
          air travel claim  
        </h1>  
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">  
          {benefits.map((benefit, index) => (  
            <div  
              key={index}  
              className="flex flex-col items-center text-center px-4 py-8"  
            >  
              <div className="mb-4">{benefit.icon}</div>  
              <p className="text-sm">{benefit.label}</p>  
            </div>  
          ))}  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Compensation;