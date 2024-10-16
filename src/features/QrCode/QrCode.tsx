import { QRCode, Space } from "antd";
import { PageModal } from "../../components/PageModal";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setLayoutState } from "../../store/slices/layoutSlice";
import { AppPayload } from "../../Models/application/payload";
import { useNavigate } from "react-router-dom";

const QrCode: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const transRef = searchParams.get("reference");
  const state = useAppSelector((state) => state.layout);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const url = window.location.href;
  const baseUrl = url.split("?")[0];
  const qrValue = transRef as string;
  const closeModal = () => {
    {
      dispatch(setLayoutState(new AppPayload("showModal", false)));
      navigate((window.location.href = baseUrl));
    }
  };
console.log(qrValue);

  return (
    <PageModal
      open={window.location.href.includes("reference") && state?.showModal}
      isPadded
      closable
      modalTitle="SCAN TO VALIDATE TICKET"
      modalWith="22rem"
      onCancel={() => closeModal()}
      centered
      modalFooter={false}
    >
      <Space className="flex justify-center">
        <QRCode type="canvas" value={qrValue} />
      </Space>
    </PageModal>
  );
};
export default QrCode;
