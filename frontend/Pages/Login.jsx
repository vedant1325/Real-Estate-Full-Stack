import { useState } from "react";
import React from "react";
import { assets } from "../src/assets/assets.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const backendURL = "https://real-estate-28mw.onrender.com";
  const navigate = useNavigate();
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = async (e) => {
    try {
      e.preventDefault();
      axios.defaults.withCredentials = true;

      let response;
      if (state === "Sign Up") {
        response = await axios.post(`${backendURL}/api/user/register`, { name, email, password });
      } else {
        response = await axios.post(`${backendURL}/api/user/login`, { email, password });
      }

      if (response.data.success) {
        // Store token in localStorage
        localStorage.setItem("token", response.data.token);

        toast.success(`${state} successful`);
        // Redirect to the home page or dashboard
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <>
      <div className="absolute top-0 left-0 z-10 w-full">
        <div className="container flex mx-auto justify-between items-center py-2 px-4 md:px-20 lg:px-32 bg-black">
          <img
            onClick={() => navigate('/')}
            className="cursor-pointer w-16 h-16 sm:w-24 sm:h-24"
            src={assets.logo}
            alt="Logo"
          />
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="text-center py-12 px-6 sm:px-8 lg:px-32 w-auto max-w-xs sm:max-w-sm md:max-w-md top-4 bg-white rounded-lg p-3 mt-4 shadow-lg">
          <h1 className="text-4xl sm:text-3xl font-bold mb-4">
            {state === "Sign Up" ? "Sign Up" : "Login"}{" "}
            <span className="underline underline-offset-4 decoration-1 font-light">
              Join With Us
            </span>
          </h1>

          <form onSubmit={SubmitHandler} className="text-gray-600 m-4 p-4">
            {state === "Sign Up" && (
              <div className="mb-4 text-left">
                Your Name
                <input
                  className="w-full border border-gray-300 rounded py-2 px-4 mt-1"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="mb-4 text-left">
              Your Email
              <input
                className="w-full border border-gray-300 rounded py-2 px-4 mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4 text-left">
              Your Password
              <input
                className="w-full border border-gray-300 rounded py-2 px-4 mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                required
              />
            </div>

            <button className="bg-gradient-to-r from-cyan-600 to-blue-800 text-white px-6 py-2 rounded-lg hover:scale-105 mb-4 font-semibold w-full sm:w-auto">
              {state}
            </button>
          </form>

          {state === "Sign Up" ? (
            <p className="text-gray-600 text-center text-xs ">
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="cursor-pointer hover:underline"
              >
                Login here.
              </span>
            </p>
          ) : (
            <p className="text-gray-600 text-center text-xs ">
              Don't have an account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="cursor-pointer hover:underline"
              >
                Create account.
              </span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
