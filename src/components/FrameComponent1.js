import TableList from "./TableList";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.appointmentListParent}>
      <div className={styles.appointmentList}>Appointment List</div>
      <img className={styles.frameChild} alt="" />
      <div className={styles.tableHead}>
        <button className={styles.table}>
          <div className={styles.patientName}>ID</div>
        </button>
        <button className={styles.table1}>
          <div className={styles.patientName1}>{` Patient `}</div>
        </button>
        <button className={styles.table2}>
          <div className={styles.patientName2}>{`Doctor `}</div>
        </button>
        <button className={styles.table3}>
          <div className={styles.patientName3}>Time</div>
        </button>
      </div>
      <TableList ellipse1="/ellipse-1@2x.png" line2="/line-2.svg" />
      <TableList ellipse1="/ellipse-1@2x.png" line2="/line-2.svg" />
      <TableList ellipse1="/ellipse-1@2x.png" line2="/line-2.svg" />
      <TableList ellipse1="/ellipse-1@2x.png" line2="/line-2.svg" />
      <TableList ellipse1="/ellipse-1@2x.png" line2="/line-2.svg" />
    </div>
  );
};

export default FrameComponent1;
