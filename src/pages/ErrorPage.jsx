import React from "react";
import err from '../assets/img/Untitled design.png'
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div className="hero bg-white min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img className="w-96 mb-8" src={err} alt="" />
          <h1 className="text-5xl font-bold mb-5">
            Page <span className="text-[#00bf63]">Not</span> Found
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="btn border-1 bg-white txtcolor border-[#00bf63] hover:bg-[#00bf63] hover:text-white"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
