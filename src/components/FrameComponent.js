import { useMemo } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  propPadding,
  propDisplay,
  propPaddingRight,
  propWidth,
  propAlignSelf,
  propPaddingRight1,
  propWidth1,
  propAlignSelf1,
  propPaddingRight2,
  propDisplay1,
  propPaddingRight3,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const dec2023Style = useMemo(() => {
    return {
      display: propDisplay,
      paddingRight: propPaddingRight,
    };
  }, [propDisplay, propPaddingRight]);

  const frameDiv3Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const kgStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      paddingRight: propPaddingRight1,
    };
  }, [propAlignSelf, propPaddingRight1]);

  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const hightStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      paddingRight: propPaddingRight2,
    };
  }, [propAlignSelf1, propPaddingRight2]);

  const regDateStyle = useMemo(() => {
    return {
      display: propDisplay1,
      paddingRight: propPaddingRight3,
    };
  }, [propDisplay1, propPaddingRight3]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.tableParent}>
        <div className={styles.table}>
          <img
            className={styles.tableChild}
            loading="eager"
            alt=""
            src="/ellipse-1@2x.png"
          />
          <h2 className={styles.patientName}>Patient Name</h2>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.dateOfBirthParent} style={frameDiv2Style}>
                <div className={styles.dateOfBirth}>Date of Birth</div>
                <div className={styles.march1990}>03 March 1990</div>
              </div>
              <div className={styles.lastAppointmentParent}>
                <div className={styles.lastAppointment}>Last Appointment</div>
                <div className={styles.dec2023} style={dec2023Style}>
                  26 Dec,2023
                </div>
              </div>
            </div>
            <div className={styles.sexParent}>
              <div className={styles.sex}>Sex</div>
              <div className={styles.male}>Male</div>
            </div>
            <div className={styles.weightParent} style={frameDiv3Style}>
              <div className={styles.weight}>Weight</div>
              <div className={styles.kg} style={kgStyle}>
                60Kg
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.hightFrameParent}>
          <div className={styles.hightFrame}>
            <h3 className={styles.patientId}>Patient ID</h3>
            <div className={styles.textLabel}>000000000000</div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.hightParent} style={frameDiv4Style}>
              <div className={styles.hight} style={hightStyle}>
                Hight
              </div>
              <div className={styles.cm}>180cm</div>
            </div>
            <div className={styles.regdateParent}>
              <div className={styles.regdate} style={regDateStyle}>
                Reg.Date
              </div>
              <div className={styles.jan2023}>18 Jan,2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
