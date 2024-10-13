import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import { Typography } from "antd";

const App = () => {
  return (
    <Suspense
      fallback={
        <Typography className="dark:bg-primary-dark">Loading ...</Typography>
      }
    >
      <RouterProvider router={router} />
      <ToastContainer />
    </Suspense>
  );
};
export default App;
