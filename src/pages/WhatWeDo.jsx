import React from "react";
import { GiClothes, GiWaterDrop } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";

const WhatWeDo = () => {
  return (
    <div>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 animate__animated animate__fadeInDown">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00bf63] mb-4">
              What We Do?
            </h2>
            <p className="text-xl text-black">
              We believe that we can save more lives with you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="flex flex-col md:flex-row gap-4 p-6 border-l-4 border-blue-500 bg-[#00bf63] rounded-lg transition-colors">
              <div className="flex-shrink-0">
                <GiClothes className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">
                  Winter Clothes
                </h3>
                <p className="text-white">
                  Healthy food is food that gives you all the nutrients you need
                  to stay healthy, feel well and have plenty of energy.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 p-6 border-l-4 border-blue-500 bg-[#00bf63] rounded-lg transition-colors">
              <div className="flex-shrink-0">
                <FaSchool className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">
                  Primary Education
                </h3>
                <p className="text-white">
                  Primary education, also called elementary education, is for
                  children in kindergarten through sixth grade. Primary
                  education provides students with a basic understanding of
                  various subjects as well as the skills they will use
                  throughout their lives.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 p-6 border-l-4 border-blue-500 bg-[#00bf63] rounded-lg transition-colors">
              <div className="flex-shrink-0">
                <MdOutlineHealthAndSafety className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">
                  Health Care
                </h3>
                <p className="text-white">
                  Helping health care providers communicate more effectively can
                  help improve health and well-being. Strategies to make sure
                  health care providers are aware of treatment guidelines and
                  recommended services are also key to improving health.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 p-6 border-l-4 border-blue-500 bg-[#00bf63] rounded-lg transition-colors">
              <div className="flex-shrink-0">
                <IoFastFoodOutline className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">
                  Healthy Food
                </h3>
                <p className="text-white">
                  Healthy food is food that gives you all the nutrients you need
                  to stay healthy, feel well and have plenty of energy.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 p-6 border-l-4 border-blue-500 bg-[#00bf63] rounded-lg transition-colors">
              <div className="flex-shrink-0">
                <BiBuildingHouse className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">
                  Residence Facilities
                </h3>
                <p className="text-white">
                  Residence Facilities is responsible for ensuring a healthy,
                  safe, secure, comfortable, and aesthetically pleasing
                  residential experience.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 p-6 border-l-4 border-blue-500 bg-[#00bf63] rounded-lg transition-colors">
              <div className="flex-shrink-0">
                <GiWaterDrop className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Pure Water</h3>
                <p className="text-white">
                  For human consumption and domestic use which is sanitary and
                  normally free of minerals, organic substances, and toxic
                  agents in excess of reasonable amounts for domestic usage in
                  the area served.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
