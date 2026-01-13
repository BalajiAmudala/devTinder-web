import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [gender, setGender] = useState(user.gender);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  const saveProfile = async () => {
    //clear error
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      clearTimeout();
    } catch (err) {
      setError(err.response);
    }
  };
  return (
    <div className="flex justify-center my-10">
      <div className="flex justify-center mx-10">
        <div className="card bg-primary/50 text-primary-content w-96 ">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">FirstName:</legend>
                <input
                  type="text"
                  value={firstName}
                  className="input  text-sky-600"
                  placeholder="FirstName"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">LastName:</legend>
                <input
                  type="text"
                  value={lastName}
                  className="input  text-sky-600"
                  placeholder="LastName"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Age:</legend>
                <input
                  type="number"
                  value={age}
                  className="input  text-sky-600"
                  placeholder="Age"
                  onChange={(e) => setAge(e.target.value)}
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">PhotoUrl:</legend>
                <input
                  type="text"
                  value={photoUrl}
                  className="input  text-sky-600"
                  placeholder="PhotoUrl"
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </fieldset>
            </div>
            <div>
              {/* <fieldset className="fieldset">
                <legend className="fieldset-legend">About:</legend>
                <input
                  type="text"
                  value={about}
                  className="input"
                  onChange={(e) => setAbout(e.target.value)}
                />
              </fieldset> */}
              <legend className="fieldset-legend">About:</legend>
              <textarea
                className="textarea  text-sky-600"
                placeholder="Bio"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender:</legend>
                <input
                  type="text"
                  value={gender}
                  className="input  text-sky-600"
                  placeholder="Gender"
                  onChange={(e) => setGender(e.target.value)}
                />
              </fieldset>
            </div>
            <p className="text-red-500"></p>
            {error && (
              <p className="text-red-500">show error message : {error}</p>
            )}
            <div className="card-actions justify-center">
              <button className="btn mt-3" onClick={saveProfile}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }} />
      {showToast && (
        <div className="toast toast-top toast-center">
          {/* <div className="alert alert-info">
          <span>New mail arrived.</span>
        </div> */}
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
