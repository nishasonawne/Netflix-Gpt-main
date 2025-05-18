import React, { useContext } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
const Body = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Login must be used within a UserProvider");
  }
  const { loginUser, user } = context;
  const appRouter = createBrowserRouter([
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
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
