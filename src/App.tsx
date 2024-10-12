import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";

const App = () => {
  return (
    <Suspense
      fallback={<div className="dark:bg-primary-dark">Loading ...</div>}
    >
      <RouterProvider router={router} />
      <ToastContainer />
    </Suspense>
  );
};
export default App;
