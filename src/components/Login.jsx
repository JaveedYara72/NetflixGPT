import Header from "./Header";
// import { useState } from "react";

const Login = () => {
  const toggleSignInForm = (e) => {
    e.preventDefault();
    console.log("Trying to sign in");
  };

  return (
    <div>
      <Header />
      <img
        className="absolute w-full h-full object-cover top-0 left-0 -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg"
        alt="Background"
      />
      <form
        className="absolute w-96 bg-black/80 my-36 p-16
       text-white mx-auto right-0 left-0 rounded"
      >
        <div className="flex flex-col mx-auto">
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>
          <input
            type="text"
            placeholder="Email"
            className="mb-4 p-4 bg-gray-700 rounded w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-4  bg-gray-700 rounded"
          />
          <button
            type="submit"
            className="p-4 bg-red-600 rounded my-2 cursor-pointer font-bold mb-4"
            onClick={toggleSignInForm}
          >
            Sign In
          </button>
          <a className="text-l py-4">New to Netflix? Sign up now</a>
        </div>
      </form>
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 -z-10"></div>
    </div>
  );
};

export default Login;
