import MainSidebar from "../components/MainSidebar";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./Appointments.module.css";
import { Link } from "react-router-dom";

const Appointments = () => {
  return (
    <div className={styles.appointments}>
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
      />
      <main className={styles.appointmentsInner}>
        <form className={styles.bookAppointmentParent}>
          <h2 className={styles.bookAppointment}>Book Appointment</h2>
          <div className={styles.frameWrapper}>

            <Link to = '/appointments'>
            <button className={styles.backParent}>
              <img className={styles.backIcon} alt="" src="/back.svg" />
              <div className={styles.back}>Back</div>
            </button>
            </Link>
          </div>
          <FrameComponent2 />
          <div className={styles.frameContainer}>
            <Link to= '/appointments1'>
            <button className={styles.createAppointmentWrapper}>
              <div className={styles.createAppointment}>Create Appointment</div>
            </button>
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Appointments;
