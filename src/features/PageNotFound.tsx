import { Result, Button } from "antd";

const PageNotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {" "}
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            onClick={() => {
              window.history.back();
            }}
            type="primary"
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
};
export default PageNotFound;
