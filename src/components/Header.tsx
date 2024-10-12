import { Typography } from "antd";
import { useTheme } from "./ThemeProviderComponent";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import partyingImage from "../assets/images/smirnoff_logo.webp"

const Header: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <nav className="  mx-4 pt-4 ">
      <div className="flex justify-between items-center pt-2 pb-2">
        <Typography className="font-inter-bold text-xl">Zeetickets</Typography>
        <button onClick={toggleTheme}>
          {themeMode === "dark" ? (
            <SunOutlined className="text-[#FFFFFF]" />
          ) : (
            <MoonOutlined />
          )}
        </button>
      </div>
      <img className="h-[200px] w-[100%] object-" src={partyingImage} alt="" />
    </nav>
  );
};
export default Header;
