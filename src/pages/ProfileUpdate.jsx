import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const photourl = formData.get("photourl");
    updateUserProfile(name, photourl)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Good job!",
          text: "Update Profile Successful",
          icon: "success",
        });
        navigate('/dashboard')
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Ooops!",
          text: errMsg,
          icon: "error",
        });
      });
  };
  return (
    <div className="md:w-2/4 lg:w-2/6 md:h-full lg:h-full my-10 rounded-lg h-full w-3/4  mx-auto">
      <div className="bg-white w-full h-full shadow-2xl rounded-lg py-10 flex flex-col gap-1">
        <div className="w-54 mx-auto ">
          <h1 className="text-4xl font-bold text-center text-[#00bf63] mb-4">
            Profile Update
          </h1>
        </div>
        <form onSubmit={handleUpdateProfile} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-black">Name</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-black">Photo URL</span>
            </label>
            <input
              type="photourl"
              name="photourl"
              placeholder="photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-[#00bf63] hover:bg-green-600 border-none text-white">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
