import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const pic = user.photoURL;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 8px rgb(34,197,94)",
      transition: {
        duration: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="h-45 bg-white flex flex-col items-center justify-center">
        <motion.div 
          variants={cardVariants}
          className="md:w-10/12 lg:w-5/12 w-11/12 md:p-32 py-32 px-10 flex flex-col my-10 md:px-32 h-[45rem] bg-white shadow-lg rounded-lg"
        >
          <motion.h1
            variants={textVariants}
            className="text-3xl font-bold text-center text-green-600 mb-6"
            animate={{
              scale: [1, 1.02, 1],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            Welcome, {user?.displayName || "User"}!
          </motion.h1>

          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center"
          >
            {user?.photoURL && (
              <motion.img
                variants={imageVariants}
                whileHover="hover"
                src={pic}
                alt="User Avatar"
                className="w-24 h-24 rounded-full mb-4 shadow-md"
              />
            )}

            <motion.div 
              variants={textVariants}
              className="w-full space-y-4"
            >
              <motion.p 
                variants={textVariants}
                className="text-lg text-gray-700"
              >
                <motion.span 
                  className="font-semibold"
                  whileHover={{ color: "#16a34a" }}
                >
                  Name:
                </motion.span>{" "}
                {user?.displayName || "N/A"}
              </motion.p>
              
              <motion.p 
                variants={textVariants}
                className="text-lg text-gray-700 mt-2"
              >
                <motion.span 
                  className="font-semibold"
                  whileHover={{ color: "#16a34a" }}
                >
                  Email:
                </motion.span>{" "}
                {user?.email || "N/A"}
              </motion.p>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/dashboard/updateprofile"
                className="btn btn-primary mt-6 border-none bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
              >
                Update Profile
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;