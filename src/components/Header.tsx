import { Typography } from "antd";
import { useTheme } from "./ThemeProviderComponent";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";

const Header: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <nav className="mx-4 pt-4 border-[#F1F1F1] dark:border-b-[#1F1F1F] dark:bg-primary-dark ">
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
    </nav>
  );
};
export default Header;
