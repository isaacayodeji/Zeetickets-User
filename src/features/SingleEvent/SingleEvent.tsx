import { Tickets } from "../../Models/client/response";
import { useGetDataQuery } from "../../store/api/api.Config";
import { endpoints } from "../../store/api/endpoints";
import { Button, Card } from "antd";
import useAmountFormatter from "../../customHooks/useAmountFormatter";
import useDateTimeFormat from "../../customHooks/useDateTimeFormat";
import { appTitle, routerPath } from "../../utils/helper";
import { useAppSelector } from "../../store/hooks";
import { useCallback } from "react";
import { setLayoutState } from "../../store/slices/layoutSlice";
import { AppPayload } from "../../Models/application/payload";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import Loader from "../../components/Loader";

const SingleEvent: React.FC = () => {
  const state = useAppSelector((state) => state.layout);
  const { formattedAmount } = useAmountFormatter();
  const { onFormattedDateTime } = useDateTimeFormat();
  const { isFetching, data } = useGetDataQuery({
    getUrl: endpoints.ticket.getOneTicket + `${state.response?._id}`,
  });
  const dispatch = useDispatch();
  const buyTicketClick = useCallback(() => {
    dispatch(setLayoutState(new AppPayload("current", 2)));
  }, [dispatch]);

  const eventData = data?.data as Tickets;
  document.title = `Event Details${appTitle}`;

  return (
    <div className="flex items-center justify-center mx-auto py-8">
      {isFetching ? (
        <Loader />
      ) : (
        <Card className="xl:w-[40%] lg:w-[50%] w-[100%] relative">
          <MdOutlineCancel
            size={25}
            onClick={() => window.location.replace(routerPath.Events)}
            className="float-right cursor-pointer top-0 right-0 absolute"
          />
          <div className="space-y-3">
            <img className="w-[100%]" src={eventData?.image} />
            <h2 className="lg:text-3xl text-xl font-inter-bold">
              {eventData?.title}
            </h2>
            <div className="flex justify-between lg:text-2xl text-gray-text">
              <h2>{eventData?.category}</h2>
              <h2>₦ {formattedAmount(eventData?.price)}</h2>
            </div>

            <h2 className="lg:text-xl text-lg">
              <b>About the Event</b> : {eventData?.description}
            </h2>
            <div>
              <h1 className="lg:text-xl text-lg font-inter-semibold">
                What to expect :
              </h1>
              <ul
                className="px-4 font-semibold"
                style={{ listStyle: "outside" }}
              >
                <li>Music</li>
                <li>Games</li>
                <li>Drinks</li>
                <li>Celebrity appearances</li>
                <li>And lots more</li>
              </ul>
            </div>
          </div>
          <div className="pt-4 flex flex-col gap-4 lg:flex-row justify-between items-center">
            <h2 className="lg:text-xl">
              {onFormattedDateTime(eventData?.eventDate)}
            </h2>
            <Button onClick={() => buyTicketClick()} type="primary">
              Purchase Ticket Now
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};
export default SingleEvent;
