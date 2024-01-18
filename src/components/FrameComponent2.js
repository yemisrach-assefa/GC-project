import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.patientParent}>
        <div className={styles.patient}>Patient</div>
        <input className={styles.form} type="text" />
        <img
          className={styles.dropdownIcon}
          loading="eager"
          alt=""
          src="/dropdown.svg"
        />
        <div className={styles.doctor}>Doctor</div>
        <input className={styles.form1} type="text" />
        <div className={styles.date}>Date</div>
        <input className={styles.form2} type="text" />
        <div className={styles.availableTime}>Available Time</div>
        <input className={styles.form3} type="text" />
      </div>
    </div>
  );
};

export default FrameComponent2;
