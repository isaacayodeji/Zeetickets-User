import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen h-screen w-[100%] grid grid-rows-[5rem_1fr_auto] bg-[#FAFAFA] dark:bg-[#121212]">
      <Header />
      <section className="overflow-auto">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
export default Layout;
