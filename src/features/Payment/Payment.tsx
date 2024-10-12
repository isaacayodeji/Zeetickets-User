import { Button, Card, Divider, Select, Typography } from "antd";
import { useAppSelector } from "../../store/hooks";
import { appTitle } from "../../utils/helper";
import useAmountFormatter from "../../customHooks/useAmountFormatter";

const Payment: React.FC = () => {
  document.title = `Payment${appTitle}`;
  const state = useAppSelector((state) => state.layout);
  console.log(state);
  const { formattedAmount } = useAmountFormatter();
  const totalAmount = state.record?.totalAmount * state.record?.quantity;

  return (
    <div className="flex justify-center py-16">
      <Card className="w-[50%]">
        <header className="pb-4">
          <Typography className="font-semibold">PAYMENT DETAILS</Typography>
          <Divider />
        </header>
        <div className="flex gap-10 justify-between">
          <Typography>Email :</Typography>
          <Typography>{state.record?.email ?? "N/A"}</Typography>
        </div>
        <Divider />
        <div className="flex gap-10 justify-between">
          <Typography>Quantity :</Typography>
          <Typography>{state.record?.quantity ?? "N/A"}</Typography>
        </div>
        <Divider />
        <div className="flex gap-10 justify-between">
          <Typography>Total Amount :</Typography>
          <Typography>₦ {formattedAmount(totalAmount) ?? "N/A"}</Typography>
        </div>
        <Divider />
        <div className="flex justify-between items-center">
          <h2>Payment Method :</h2>
          <Select
            defaultValue="Paystack"
            options={[{ label: "Paystack", value: "1" }]}
            disabled
          />
        </div>
        <div className="pt-8">
          <a href={state.record?.authorization_url} target="_blank">
            <Button block type="primary" htmlType="submit">
              Pay
            </Button>
          </a>
        </div>
      </Card>
    </div>
  );
};
export default Payment;
