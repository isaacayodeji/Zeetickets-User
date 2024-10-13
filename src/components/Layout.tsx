import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import useToast from "./useToast";
import { Button, Result } from "antd";

const Layout: React.FC = () => {
  const onNotify = useToast();
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    // Function to handle when the user goes offline
    const handleOffline = () => {
      setIsOnline(false);
      onNotify(
        "error",
        "You are offline. Please check your internet connection."
      );
    };

    // Function to handle when the user goes online
    const handleOnline = () => {
      setIsOnline(true);
      onNotify("success", "You are back online!");
    };

    // Add event listeners for online and offline events
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Cleanup event listeners when the component is unmounted
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, [onNotify]);

  return (
    <div className="min-h-screen h-screen w-[100%] grid grid-rows-[5rem_1fr_auto] bg-[#FAFAFA] dark:bg-[#121212]">
      <Header />
      <section className="overflow-auto">
        {!isOnline ? (
          <div className="alert alert-error flex items-center justify-center h-screen">
            <Result
              status="warning"
              title="You are offline. Please check your internet connection."
              extra={
                <Button
                  onClick={() => {
                    window.location.reload();
                  }}
                  type="primary"
                  key="console"
                >
                  Refresh
                </Button>
              }
            />
          </div>
        ) : (
          <Outlet />
        )}
      </section>
      <Footer />
    </div>
  );
};
export default Layout;
