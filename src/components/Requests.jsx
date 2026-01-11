import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";
import axios from "axios";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    fetchRequests();
  }, []);
  if (!requests) return;
  if (requests.length === 0) return <h1>No Requests found!!</h1>;
  return (
    <div className=" text-center my-10">
      <h1 className="text-bold text-3xl">Requests</h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, about, gender, age } =
          request.fromUserId;

        return (
          <div
            key={_id}
            className="flex m-4 p-4 justify-between items-center rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div>
              <img
                className="w-20 h-20 rounded-full"
                src={photoUrl}
                alt="photo"
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div className=" flex  mx-2">
              <button className="btn btn-success mx-2">Success</button>
              <button className="btn btn-secondary mx-2">Secondary</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
