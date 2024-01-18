import MainSidebar from "../components/MainSidebar";
import Calander from "../components/Calander";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./Appointments1.module.css";
import { Link } from "react-router-dom";

const Appointments1 = () => {
  return (
    <div className={styles.appointments}>
      <div className={styles.mainSidebarParent}>
        <MainSidebar 
          pic="/pic@2x.png"
          materialSymbolsdashboardO="/materialsymbolsdashboardoutline1.svg"
          appointment="/appointment.svg"
          registration="/registration.svg"
          user1="/user.svg"
          profile="/profile@2x.png"
          materialSymbolsdashboardO1="/materialsymbolsdashboardoutline.svg"
          materialSymbolsdashboardO2="/materialsymbolsdashboardoutline.svg"
          materialSymbolslogoutShar="/materialsymbolslogoutsharp.svg"
          frameDivMinWidth="250px"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.bookAppointmentParent}>
              <h2 className={styles.bookAppointment}>Book Appointment</h2>
              <div className={styles.frameContainer}>
                <Link to = "/appointments1">
                <button className={styles.addParent}>
                  <img className={styles.addIcon} alt="" src="/add.svg" />
                  <div className={styles.newAppointment}>New Appointment</div>
                </button>
                </Link>
              </div>
            </div>
            <div className={styles.calanderWrapper}>
              <Calander />
            </div>
          </div>
        </div>
      </div>
      <img className={styles.dayDate} alt="" src="/-day--date-1@2x.png" />
      <div className={styles.appointmentsInner}>
        <FrameComponent1 />
      </div>
    </div>
  );
};

export default Appointments1;
