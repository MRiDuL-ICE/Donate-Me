import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);
  const { googleSignin, loginUser, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const handleGoogleSignin = (e) => {
    e.preventDefault();
    console.log("clicked");
    googleSignin()
      .then((res) => {
        const user = res.user;
        console.log(user);
        setUser(user);
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          title: "Good job!",
          text: "Login Successful",
          icon: "success",
        });
      })
      .catch((err) => {
        const errCode = err.code;
        const errMsg = err.message;
        console.log(err);
        setError(errMsg);
        Swal.fire({
          title: "Login Failed",
          text: errMsg,
          icon: "error",
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setUser(user);
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          title: "Good job!",
          text: "Login Successful",
          icon: "success",
        });
      })
      .catch((err) => {
        const errCode = err.code;
        const errMsg = err.message;
        console.log(err);
        setError(errMsg);
        Swal.fire({
          title: "Login Failed",
          text: errMsg,
          icon: "error",
        });
      });
  };

  const handleSeePassword = (e) => {
    e.preventDefault();
    setSeePassword(!seePassword);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="md:w-2/4 lg:w-2/6 md:h-full lg:h-full my-10 rounded-lg h-full w-3/4 mx-auto"
    >
      <motion.div
        variants={itemVariants}
        className="bg-white w-full h-full shadow-2xl rounded-lg py-10 flex flex-col gap-1"
      >
        <motion.div variants={itemVariants} className="w-32 mx-auto">
          <motion.h1
            animate={{
              scale: [1, 1.2, 1],
              color: ["#00bf63", "#028a48", "#00bf63"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-4xl font-bold text-center text-[#00bf63] mb-4"
          >
            Login
          </motion.h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col lg:flex-row w-10/12 mx-auto justify-center items-center gap-6 md:gap-6 pt-10"
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleGoogleSignin}
            className="btn bg-white border rounded-md border-blue-400"
          >
            <FcGoogle /> Login with Google
          </motion.button>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="btn bg-white border rounded-md border-black"
          >
            <FaGithub /> Login with Github
          </motion.button>
        </motion.div>

        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="card-body flex gap-4 p-16 pb-20"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-lg font-bold text-center">Or</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="form-control">
            <label className="label">
              <span className="label-text font-bold text-black">Email</span>
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants} className="form-control relative">
            <label className="label">
              <span className="label-text font-bold text-black">Password</span>
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type={seePassword ? `text` : `password`}
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSeePassword}
            >
              {seePassword ? (
                <FaEyeSlash className="absolute text-slate-600 right-4 text-xl top-12" />
              ) : (
                <FaEye className="absolute text-slate-600 right-4 text-xl top-12" />
              )}
            </motion.button>
            <label className="label">
              <Link
                to={"/forgetpassword"}
                state={{ email }}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="text-red-500"
            >
              {error}
            </motion.div>
          )}

          <motion.div variants={itemVariants} className="form-control mt-6">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="btn btn-primary bg-[#00bf63] text-white border-none hover:bg-green-600"
            >
              Login
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="font-bold text-black">
              Don't have any account yet?{" "}
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Link
                  to={"/register"}
                  className="font-extrabold text-[#00bf63]"
                >
                  Register
                </Link>
              </motion.span>
            </p>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Login;
