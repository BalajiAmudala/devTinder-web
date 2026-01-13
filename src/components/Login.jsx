import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [emailId, setEmailId] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "something went wrong!!");
    }
  };
  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      console.log(res.data);
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "something went wrong!!");
    }
  };
  return (
    <div className="flex justify-center my-5">
      <div className="card bg-primary/50 text-primary-content w-96 ">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLoginForm ? "Login" : "SignUp"}
          </h2>
          <div>
            {!isLoginForm && (
              <>
                <div>
                  <label className="form-control w-full max-w-xs my-2">
                    <input
                      type="text"
                      value={firstName}
                      placeholder="firstName"
                      className="input input-bordered w-full max-x-xs  text-sky-600"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="my-5">
                  <label className="form-control w-full max-w-xs my-2">
                    <input
                      type="text"
                      value={lastName}
                      placeholder="lastName"
                      className="input input-bordered w-full max-x-xs text-sky-600"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </label>
                </div>
              </>
            )}

            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                value={emailId}
                placeholder="mail@site.com"
                required
                className="text-sky-600"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <div className="validator-hint hidden ">
              Enter valid email address
            </div>
          </div>
          <div className="mt-5">
            <input
              type="password"
              value={password}
              className="input validator text-sky-600"
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              // minlength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
            <p className="validator-hint hidden ">
              Must be more than 8 characters, including
              <br />
              At least one number
              <br />
              At least one lowercase letter
              <br />
              At least one uppercase letter
            </p>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button
              className="btn mt-3"
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "SignUp"}
            </button>
          </div>
          <button
            className="btn"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "New User ? SignUp Here"
              : "Existing User? Login Here"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
