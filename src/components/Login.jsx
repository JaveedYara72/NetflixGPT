import Header from "./Header";
// import { useState } from "react";

const Login = () => {
  return (
    <div>
      <Header />
      <img
        className="absolute w-full h-full object-cover top-0 left-0 -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg"
        alt="Background"
      />
      <form className="absolute w-96 bg-black bg-opacity-80 my-36 p-12 text-white mx-auto right-0 left-0 rounded">
        <div className="flex flex-col mx-12">
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>
          <input type="text" placeholder="Email" className="my-4 p-6" />
          <input type="password" placeholder="Password" className="my-4 p-6" />
          <button type="submit" className="p-2 bg-red-600 rounded my-2">
            Sign In
          </button>
        </div>
      </form>
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 -z-10"></div>
    </div>
  );
};

export default Login;
