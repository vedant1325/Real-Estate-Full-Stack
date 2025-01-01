import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const HeroForm = () => {
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const backendUrl = "https://real-estate-28mw.onrender.com";

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true;

      const response = await axios.post(
        `${backendUrl}/api/admin/send-email`,
        { subject, text }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setSubject(""); // Clear the subject field after successful submission
        setText(""); // Clear the message field after successful submission
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // Log the error to the console for debugging
      console.error("Error in submission: ", error);
      toast.error(
        error.response?.data?.message || error.message || "An unexpected error occurred."
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-[540px] bg-gray-50 px-4 sm:px-6 lg:px-8 overflow-hidden md:h-[653px]">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6 ">
          Admin <span className="underline underline-offset-4 decoration-1 font-light">News letter Form</span>
        </h1>

        <form onSubmit={SubmitHandler} className="text-gray-700 space-y-6">
          <div className="text-left">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-1">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className="text-left">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Enter your message" value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;
