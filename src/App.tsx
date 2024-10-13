import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import Loader from "./components/Loader";

const App = () => {
  return (
    <Suspense
      fallback={
        <Loader />
      }
    >
      <RouterProvider router={router} />
      <ToastContainer />
    </Suspense>
  );
};
export default App;
