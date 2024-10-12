import { QRCode, Space } from "antd";
import { PageModal } from "../../components/PageModal";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setLayoutState } from "../../store/slices/layoutSlice";
import { AppPayload } from "../../Models/application/payload";
import { useNavigate } from "react-router-dom";

const QrCode: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const transRef = searchParams.get("reference");
  console.log(transRef);
  const state = useAppSelector((state) => state.layout);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const url = window.location.href;
  const baseUrl = url.split("?")[0];
  const closeModal = () => {
    {
      dispatch(setLayoutState(new AppPayload("showModal", false)));
      navigate((window.location.href = baseUrl));
    }
  };

  return (
    <PageModal
      open={window.location.href.includes("reference") && state?.showModal}
      isPadded
      closable
      modalTitle="Scan to validate ticket"
      modalWith="22rem"
      onCancel={() => closeModal()}
      centered
      modalFooter={false}
    >
      <Space className="flex justify-center">
        <QRCode type="canvas" value={window.location.href + transRef} />
      </Space>
    </PageModal>
  );
};
export default QrCode;
