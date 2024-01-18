import { useMemo } from "react";
import styles from "./TableList1.module.css";

const TableList1 = ({
  ellipse1,
  line2,
  propHeight,
  propPadding,
  propPadding1,
  propPadding2,
  propMixBlendMode,
}) => {
  const tableListStyle = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  const tableStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const table1Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const patientNameStyle = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode,
    };
  }, [propMixBlendMode]);

  return (
    <div className={styles.tableList} style={tableListStyle}>
      <div className={styles.tableParent}>
        <div className={styles.table}>
          <img
            className={styles.tableChild}
            loading="eager"
            alt=""
            src={ellipse1}
          />
          <div className={styles.patientName}>Patient Name</div>
        </div>
        <div className={styles.table1}>
          <div className={styles.patientName1}>+251911111111</div>
        </div>
        <div className={styles.table2} style={tableStyle}>
          <div className={styles.patientName2}>Head Ace</div>
        </div>
        <div className={styles.table3} style={table1Style}>
          <div className={styles.patientName3} style={patientNameStyle}>
            31 Dec 2023 @12:30pm
          </div>
        </div>
      </div>
      <div className={styles.tableListInner}>
        <img className={styles.frameChild} loading="eager" alt="" src={line2} />
      </div>
    </div>
  );
};

export default TableList1;
