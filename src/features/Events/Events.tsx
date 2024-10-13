import { Button, Card, Image, Pagination, Spin } from "antd";
import { API, TicketData, Tickets } from "../../Models/client/response";
import { useGetDataQuery } from "../../store/api/api.Config";
import { endpoints } from "../../store/api/endpoints";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { appTitle } from "../../utils/helper";
import Meta from "antd/es/card/Meta";
import useAmountFormatter from "../../customHooks/useAmountFormatter";
import { setLayoutState } from "../../store/slices/layoutSlice";
import { useCallback, useEffect, useState } from "react";
import { AppPayload } from "../../Models/application/payload";
import QrCode from "../QrCode/QrCode";
import Loader from "../../components/Loader";

const Events: React.FC = () => {
  const state = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const { isFetching, data } = useGetDataQuery({
    getUrl:
      endpoints.ticket.getAllTicket + `?page=${state.page}&size=${state.size}`,
  });
  const eventData: API<TicketData> = data;

  const { formattedAmount } = useAmountFormatter();

  document.title = `Events${appTitle}`;

  const buyTicketClick = useCallback(
    (response: Tickets) => {
      dispatch(setLayoutState(new AppPayload("response", response)));
      dispatch(setLayoutState(new AppPayload("current", 1)));
    },
    [dispatch]
  );

  useEffect(() => {
    if (window.location.href.includes("reference")) {
      dispatch(setLayoutState(new AppPayload("showModal", true)));
    }
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(8);

  // Pagination logic to filter
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEvents = eventData?.data?.tickets?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {state.showModal && <QrCode />}

      {isFetching ? (
        <Loader />
      ) : (
        <div className="className=flex items-center justify-center  py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {currentEvents?.map((item, index) => {
              return (
                <Card
                  key={index}
                  className="w-[80%] hover:shadow-lg"
                  cover={
                    <Image
                      src={item?.image}
                      className="w-full h-full object-cover"
                      style={{ height: 180 }}
                      alt={`Ticket ${index}`}
                    />
                  }
                >
                  <Meta
                    title={item?.title}
                    description={
                      <div className="flex justify-between">
                        <h2>{`₦ ${formattedAmount(item?.price)}`}</h2>
                        <h2>{item?.category}</h2>
                      </div>
                    }
                  />
                  <h2 className="pt-2">{item?.description.toUpperCase()}</h2>
                  <div className="pt-3">
                    <Button
                      onClick={() => buyTicketClick(item)}
                      block
                      type="primary"
                      disabled={item.slots === 0 ? true : false}
                    >
                      {item.slots === 0 ? "Sold Out" : "Buy Ticket"}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="mt-6 flex justify-center">
            <Spin spinning={isFetching}>
              <Pagination
                current={currentPage}
                total={eventData?.data?.tickets?.length}
                pageSize={itemsPerPage}
                onChange={handlePageChange}
                showSizeChanger={false}
                className="custom-pagination"
              />
            </Spin>
          </div>
        </div>
      )}
    </>
  );
};
export default Events;
