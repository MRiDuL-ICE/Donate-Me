import React, { useContext, useState } from "react";
import logo from "../../assets/img/Grow Together.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <div className="flex flex-col md:flex-row font-bold">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/donationcampaigns"}>Donation Campaigns</Link>
      </li>
      <li>
        <Link to={"/"}>How To Help</Link>
      </li>
      <li>
        {user && (user?.displayName || user?.email) && (
          <Link to={"/dashboard"}>Dashboard</Link>
        )}
      </li>
    </div>
  );

  return (
    <div>
      <div className="navbar px-16 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:flex md:flex-col lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm md:flex md:flex-col dropdown-content bg-slate-50 rounded-box z-30 mt-3 w-52 md:w-[32rem] py-4 gap-4 p-2 shadow absolute "
            >
              {links}
              <p className={`${user} md:hidden flex`}>{user && user?.displayName}</p>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="btn md:hidden flex bg-red-500 text-white hover:bg-green-600"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to={"/login"}
                  className="btn bg-[#00bf63] text-white hover:bg-green-600"
                >
                  Login
                </Link>
              )}
            </ul>
          </div>
          <div className="md:w-18 flex justify-center items-center flex-col">
            {" "}
            <img className="md:w-12 w-10" src={logo} alt="" />
            <p className="md:text-xl md:w-full font-bold text-[#00bf63] -translate-y-4">
              Donate Me
            </p>
          </div>
        </div>
        <div className="navbar-center hidden  md:gap-1 lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="hidden md:flex lg:flex items-center gap-6">
            <div className="flex flex-col items-center justify-center">
             {
              user && <>
               <img className="w-12 rounded-full h-12" src={user && user?.photoURL} alt="" />
               <p className={`${user} p-1 font-bold bg-slate-100 rounded-md`}>{user && user?.displayName}</p>
              </>
             }
            </div>
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn bg-red-500 text-white hover:bg-green-600"
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/login"}
                className="btn bg-[#00bf63] text-white hover:bg-green-600"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
