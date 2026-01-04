import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [emailId, setEmailId] = useState("rishab@gmail.com");
  const [password, setPassword] = useState("Rishab@123");
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
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center my-5">
      <div className="card bg-primary/50 text-primary-content w-96 ">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
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
                // className="text-black"
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
              className="input validator"
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
          <div className="card-actions justify-center">
            <button className="btn mt-3" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
