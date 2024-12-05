import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const location = useLocation();
  const { user, passwordReset } = useContext(AuthContext);
  const [email, setEmail] = useState(location.state?.email || "");
  const navigate = useNavigate();

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    passwordReset(email)
      .then((res) => {
        Swal.fire({
          title: "Good Job!",
          text: "Password reset mail send to your email",
          icon: "success",
        });
        navigate("/login");
      })
      .catch((err) => {
        Swal.fire({
          title: "Ooops!",
          text: "Enter a valid email",
          icon: "error",
        });
      });
  };

  return (
    <div className="">
      <Header></Header>
      <div className="md:w-2/4 lg:w-2/6 md:h-full lg:h-full my-10 rounded-lg h-full w-3/4  mx-auto">
        <div className="bg-white w-full h-full shadow-2xl rounded-lg py-10 flex flex-col gap-1">
          <div className="w-72 mx-auto ">
            <h1 className="text-4xl font-bold text-center text-[#00bf63] mb-4">
              Reset Password
            </h1>
          </div>
          <form onSubmit={handlePasswordReset} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white border-none bg-[#00bf63]">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ForgetPassword;
