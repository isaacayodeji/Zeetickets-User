import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import { routerPath } from "./helper";
import {
  EventDetails,
  PageComponents,
  Payments,
  Registration,
} from "./lazyComponent";
import Events from "../features/Events/Events";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: routerPath.Events,
        Component: PageComponents,
        children: [
          {
            Component: Events,
            index: true,
          },
        //   {
        //     path: routerPath.AgeVerification,
        //     Component: AgeVerification,
        //   },
          {
            path: routerPath.EventDetails,
            Component: EventDetails,
          },
          {
            path: routerPath.Registration,
            Component: Registration,
          },
          {
            path: routerPath.Payments,
            Component: Payments,
          },
        ],
      },
    ],
  },
]);
