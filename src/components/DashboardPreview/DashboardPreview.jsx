import style from "./DashboardPreview.module.css";
import { DASHBOARD_URL } from "../../utils/Contants";

const DashboardPreview = () => {
  return (
    <div className={style.dashboard_container}>
      <img
        className={style.dashboard_image}
        src={DASHBOARD_URL}
        alt="X-ACK Dashboard"
      />
    </div>
  );
};

export default DashboardPreview;
