import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen h-screen w-[100%] grid grid-rows-[16rem_1fr_auto] bg-[#FAFAFA] ">
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
export default Layout;
