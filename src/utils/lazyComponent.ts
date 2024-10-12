import { lazy } from "react";

const AgeVerification = lazy(
  () => import("../features/AgeVerification/AgeVerification")
);
const EventDetails = lazy(() => import("../features/SingleEvent/SingleEvent"));
const Registration = lazy(
  () => import("../features/Registration/Registration")
);
const Payments = lazy(() => import("../features/Payment/Payment"));
const PageComponents = lazy(() => import("../features/index"))

export { Payments, AgeVerification, Registration, EventDetails,PageComponents };
