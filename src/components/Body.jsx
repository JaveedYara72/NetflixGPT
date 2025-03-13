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
    </div>
  );
};

export default Body;
