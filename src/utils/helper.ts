import { FormProps } from "antd";

export const routerPath = {
  Events: "/",
  AgeVerification: "/age-verification",
  EventDetails: "/event-details",
  Registration: "registration",
  Payments: "/payment",
};

export const formConfig: FormProps = {
  autoComplete: "off",
  layout: "vertical",
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
  requiredMark: "optional",
};

export const appTitle = " - a platform to booking your show tickets";
