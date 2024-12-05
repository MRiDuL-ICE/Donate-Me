import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Stats = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    {
      number: 180,
      label: "Featured Campaign",
      suffix: "+",
    },
    {
      number: 280,
      label: "Dedicated Volunteers",
      suffix: "+",
    },
    {
      number: 1560,
      label: "People Helped Happily",
      suffix: "+",
    },
  ];

  return (
    <div
      className="w-full py-6 pb-20"
    >
        <h1 className="text-4xl text-[#00bf63] text-center pb-10 font-bold">Our Achievement</h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#00bf63] rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              <div className="flex items-center text-white justify-center">
                <span
                  className="text-5xl text-white font-bold"
                >
                  {inView ? (
                    <CountUp end={stat.number} duration={2.5} separator="," />
                  ) : (
                    "0"
                  )}
                </span>
                <span
                  className="text-5xl font-bold"
                >
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-2 text-xl text-white font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
