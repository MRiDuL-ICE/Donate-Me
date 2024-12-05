import React from "react";

const HowItWork = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-bold text-[#00bf63] text-center mb-8">
            How It Works
          </h2>

          <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-8 lg:space-y-0">
            {/* Step 1: Donation Instructions */}
            <div className="lg:w-1/3 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-100 text-[#00bf63] rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-2">Make a Donation</h3>
              <p className="text-gray-700">
                Donate funds or winter essentials such as jackets, blankets, and
                warm clothing. Every contribution counts toward making a
                difference.
              </p>
            </div>

            {/* Step 2: Collection Points */}
            <div className="lg:w-1/3 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-100 text-[#00bf63] rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Drop Off at Collection Points
              </h3>
              <p className="text-gray-700">
                Locate the nearest collection point from our network across
                multiple regions. Drop off your donations conveniently.
              </p>
            </div>

            {/* Step 3: Supported Divisions */}
            <div className="lg:w-1/3 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-100 text-[#00bf63] rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Supported Divisions
              </h3>
              <p className="text-gray-700">
                We support underprivileged communities in various divisions,
                including rural areas and urban shelters. Together, we bring
                warmth to those in need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWork;
<section className="py-16 bg-white">
  <div className="container mx-auto px-6 lg:px-16">
    <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">
      How It Works
    </h2>

    <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-8 lg:space-y-0">
      {/* Step 1: Donation Instructions */}
      <div className="lg:w-1/3 flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
          1
        </div>
        <h3 className="text-2xl font-semibold mb-2">Make a Donation</h3>
        <p className="text-gray-700">
          Donate funds or winter essentials such as jackets, blankets, and warm
          clothing. Every contribution counts toward making a difference.
        </p>
      </div>

      {/* Step 2: Collection Points */}
      <div className="lg:w-1/3 flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
          2
        </div>
        <h3 className="text-2xl font-semibold mb-2">
          Drop Off at Collection Points
        </h3>
        <p className="text-gray-700">
          Locate the nearest collection point from our network across multiple
          regions. Drop off your donations conveniently.
        </p>
      </div>

      {/* Step 3: Supported Divisions */}
      <div className="lg:w-1/3 flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
          3
        </div>
        <h3 className="text-2xl font-semibold mb-2">Supported Divisions</h3>
        <p className="text-gray-700">
          We support underprivileged communities in various divisions, including
          rural areas and urban shelters. Together, we bring warmth to those in
          need.
        </p>
      </div>
    </div>
  </div>
</section>;
