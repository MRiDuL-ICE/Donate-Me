import React from "react";
import aboutImage from "../assets/img/toddler-6995812_960_720.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-16">
          <div className="lg:w-1/2 flex justify-start mb-10 lg:mb-0 animate__animated animate__backInLeft">
            <img
              src={aboutImage}
              alt="About Us"
              className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
            />
          </div>

          <div className="lg:w-1/2 animate__animated animate__backInRight">
            <h2 className="text-4xl font-bold text-[#00bf63] mb-4">About Us</h2>
            <p className="text-gray-700 mb-6">
              Our website is dedicated to making a difference by connecting
              people who care with those who need help. We focus on providing
              winter clothing and essentials to underprivileged communities,
              ensuring everyone can stay warm and safe during the cold season.
            </p>

            <h3 className="text-3xl font-semibold text-[#00bf63] mb-4">
              How You Can Contribute
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                <strong>Donate:</strong> Contribute funds or winter clothing
                items to help us reach our goals.
              </li>
              <li>
                <strong>Volunteer:</strong> Join our team to distribute items
                and spread warmth and hope.
              </li>
              <li>
                <strong>Spread the Word:</strong> Share our mission on social
                media to increase awareness and support.
              </li>
            </ul>

            <div className="mt-6">
              <Link to={'/donationcampaigns'}><button className="btn btn-primary bg-[#00bf63] border-none text-white py-2 px-6 rounded-md shadow-lg hover:bg-green-600">
                Get Involved
              </button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
