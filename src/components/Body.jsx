// component import
import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

// React Router Provider
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={AppRouter} />
      <img
        className="absolute"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
        src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg"
        alt="Background"
      />
    </div>
  );
};

export default Body;
