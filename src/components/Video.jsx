import React from 'react';
import video from '../assets/video.png';
import benefits from '../assets/benefits.png';

const Video = () => {
  return (
    <div className="container bg-white text-black px-4 sm:px-10">
      <div className="flex flex-col justify-center items-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mt-10 mb-6">
          Get up to £1,040 per couple in compensation
        </h1>

        {/* Video Image */}
        <img
          className="w-full sm:w-1/2 mt-10 mb-6 object-contain"
          src={video}
          alt="Video Thumbnail"
        />

        {/* Subheading */}
        <h1 className="text-3xl text-center font-bold mb-4">
          It's a quick and simple process
        </h1>
        <p className="text-center text-lg font-semibold mb-6 max-w-3xl mx-auto">
          Easy, straightforward, and free to check - our expert team will fight for
          your rights, so you can focus on the important things in life!
        </p>

        {/* Benefits Image */}
        <img
          className="w-full sm:w-2/3 mt-10 mb-10 object-contain"
          src={benefits}
          alt="Benefits"
        />
      </div>
    </div>
  );
};

export default Video;
