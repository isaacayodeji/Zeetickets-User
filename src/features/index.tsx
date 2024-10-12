import Events from "./Events/Events";
import SingleEvent from "./SingleEvent/SingleEvent";
import Registration from "./Registration/Registration";
import Payment from "./Payment/Payment";
import { Steps } from "antd";
import { useAppSelector } from "../store/hooks";

const PageComponents: React.FC = () => {
  const state = useAppSelector((state) => state.layout);
  console.log(state.current);
  const steps = [
    {
      status: "process",
      title: "All Events",
      content: <Events />,
    },
    {
      status: "process",
      title: "Events Details",
      content: <SingleEvent />,
    },
    {
      status: "process",
      title: "Registration",
      content: <Registration />,
    },
    {
      status: "process",
      title: "Payment",
      content: <Payment />,
    },
  ];

//   const url = window.location.href;

  //   useEffect(() => {
  //     switch (true) {
  //       case url.includes(routerPath.EventDetails):
  //         dispatch(setAllLayoutState({ ...state, current: 1 }));
  //         break;
  //       case url.includes(routerPath.Registration):
  //         dispatch(setAllLayoutState({ ...state, current: 2 }));
  //         break;
  //       case url.includes(routerPath.Payments):
  //         dispatch(setAllLayoutState({ ...state, current: 3 }));
  //         break;
  //       default:
  //         break;
  //     }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [url, dispatch]);

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div className="px-6 py-5 ">
      <>
        <Steps
          type="default"
          current={state.current}
          items={items}
          responsive={true}
        />
        <div>{steps[state.current > 4 ? 0 : state.current].content}</div>
      </>
    </div>
  );
};
export default PageComponents;
