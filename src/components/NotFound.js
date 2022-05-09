import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className=" flex items-center justify-center w-screen h-screen bg-gradient-to-r from-indigo-600 to-blue-400">
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-blue-600 text-9xl">404</h1>
          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">Oops!</span> Page not found
          </h6>
          <Link
            to="/"
            className="px-6 py-2 mt-4 text-sm font-semibold text-blue-800 bg-blue-100"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};