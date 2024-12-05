import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Register = () => {
  const { createNewUser, googleSignin, userProfile, user, setUser } =
    useContext(AuthContext);
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const socialButtonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    focus: {
      scale: 1.02,
      borderColor: "#00bf63",
      transition: { duration: 0.2 },
    },
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
    const name = formData.get("name");
    const email = formData.get("email");
    const photourl = formData.get("photourl");
    const password = formData.get("password");
    console.log(name, email, photourl, password);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        title: "Invalid Password",
        text: "Password must be at least 6 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.",
        icon: "error",
      });
      return;
    }
    createNewUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setUser(user);
        e.target.reset();
        navigate(location?.state ? location.state : "/");
        userProfile(name, photourl);
        Swal.fire({
          title: "Good job!",
          text: "Registration Successful",
          icon: "success",
        });
      })
      .catch((err) => {
        const errCode = err.code;
        const errMsg = err.message;
        console.log(errMsg);
        e.target.reset();
        Swal.fire({
          title: "Registration Failed",
          text: errMsg,
          icon: "error",
        });
      });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="md:w-2/4 lg:w-2/6 md:h-full lg:h-full h-full my-10 rounded-lg w-3/4 mx-auto"
    >
      <motion.div
        variants={itemVariants}
        className="bg-white w-full h-full py-10 shadow-2xl rounded-lg"
      >
        <motion.div variants={itemVariants} className="w-32 mx-auto">
          <motion.h1
            animate={{
              scale: [1, 1.05, 1],
              color: ["#00bf63", "#028a48", "#00bf63"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-4xl font-bold text-center text-[#00bf63]"
          >
            Register
          </motion.h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col lg:flex-row w-10/12 mx-auto justify-center items-center gap-6 md:gap-6 pt-10"
        >
          <motion.button
            variants={socialButtonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleGoogleSignin}
            className="btn bg-white border rounded-md border-blue-400"
          >
            <FcGoogle /> Login with Google
          </motion.button>

          <motion.button
            variants={socialButtonVariants}
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
          className="card-body flex gap-4 px-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-lg font-bold text-center">Or</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="form-control">
            <label className="label">
              <span className="label-text font-bold text-black">Name</span>
            </label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              type="name"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants} className="form-control">
            <label className="label">
              <span className="label-text font-bold text-black">Email</span>
            </label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants} className="form-control">
            <label className="label">
              <span className="label-text font-bold text-black">Photo URL</span>
            </label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              type="photourl"
              name="photourl"
              placeholder="photo URL"
              className="input input-bordered"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants} className="form-control">
            <label className="label">
              <span className="label-text font-bold text-black">Password</span>
            </label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants} className="form-control mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary bg-[#00bf63] text-white border-none hover:bg-green-600"
            >
              Register
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="font-bold text-black">
              Already have account?{" "}
              <motion.span whileHover={{ scale: 1.1 }} className="inline-block">
                <Link to={"/login"} className="font-extrabold text-[#00bf63]">
                  Login
                </Link>
              </motion.span>
            </p>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Register;
