import { Form, Input, Select } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { appTitle, formConfig } from "../../utils/helper";
import { usePostDataMutation } from "../../store/api/api.Config";
import { endpoints } from "../../store/api/endpoints";
import { API, Booking } from "../../Models/client/response";
import useToast from "../../components/useToast";
import { setLayoutState } from "../../store/slices/layoutSlice";
import { AppPayload } from "../../Models/application/payload";
import { useCallback } from "react";
import SubmitButton from "../../components/SubmitButton";

const Registration: React.FC = () => {
  const [postData, response] = usePostDataMutation();
  document.title = `Registration${appTitle}`;
  const state = useAppSelector((state) => state.layout);
  const onNotify = useToast();
  const dispatch = useAppDispatch();
  console.log(state);
  const [form] = Form.useForm();

  const onFinish = useCallback(async () => {
    const request = await form.validateFields();
    const data = await postData({
      postUrl: endpoints.booking.purchaseBooking + state.response?._id,
      request: {
        email: request?.email,
        quantity: request?.quantity,
        callbackUrl: "http://localhost:9921",
      },
    });
    try {
      const response: API<Booking> = data?.data;
      if (response.responseCode === 200) {
        dispatch(
          setLayoutState(new AppPayload("record", response.data as Booking))
        );
        dispatch(setLayoutState(new AppPayload("current", 3)));
        onNotify("success", response.responseMessage);
      } else {
        onNotify("success", response.responseMessage);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      onNotify("error", error.message || "An error just occurred");
    }
  }, [dispatch, form, onNotify, postData, state.response?._id]);

  const { Option } = Select;
  const quantities = Array.from({ length: 10 }, (_, i) => i + 1); // [1, 2, 3, ..., 10]

  return (
    <div className="flex items-center justify-center pt-10 ">
      <Form
        form={form}
        {...formConfig}
        onFinish={onFinish}
        className="xl:w-[30%] lg:w-[40%] w-[100%]"
        initialValues={state.request}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Please enter a valid email address" },
          ]}
        >
          <Input type="email" placeholder="example@gmail.com" />
        </Form.Item>

        <Form.Item
          label="Quality"
          name="quantity"
          rules={[{ required: true, message: "Please select a quantity!" }]}
        >
          <Select placeholder="Select quantity">
            {quantities.map((quantity) => (
              <Option key={quantity} value={quantity}>
                {quantity}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <SubmitButton block form={form} loading={response.isLoading}>
          Proceed
        </SubmitButton>
      </Form>
    </div>
  );
};
export default Registration;
