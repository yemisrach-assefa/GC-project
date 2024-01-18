import styles from "./Calander.module.css";

const Calander = () => {
  return (
    <div className={styles.calander}>
      <img
        className={styles.monthYearLine}
        loading="eager"
        alt=""
        src="/month-year-line@2x.png"
      />
      <div className={styles.calanderInner}>
        <img className={styles.frameChild} loading="eager" alt="" />
      </div>
      <img
        className={styles.dayDate}
        loading="eager"
        alt=""
        src="/-day--date@2x.png"
      />
    </div>
  );
};

export default Calander;
