import styles from "./TableList.module.css";

const TableList = ({ ellipse1, line2 }) => {
  return (
    <div className={styles.tableList}>
      <div className={styles.tableParent}>
        <div className={styles.table}>
          <img className={styles.tableChild} alt="" src={ellipse1} />
          <div className={styles.patientName}>0987675</div>
        </div>
        <div className={styles.table1}>
          <div className={styles.patientNameWrapper}>
            <div className={styles.patientName1}>Abebe teklu</div>
          </div>
        </div>
        <div className={styles.table2}>
          <div className={styles.patientName2}>Dr.Kebede</div>
        </div>
        <div className={styles.table3}>
          <div className={styles.patientName3}>12:30pm</div>
        </div>
      </div>
      <div className={styles.tableListInner}>
        <img className={styles.frameChild} loading="eager" alt="" src={line2} />
      </div>
    </div>
  );
};

export default TableList;
