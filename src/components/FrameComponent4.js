import styles from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.profileWrapper}>
        <h1 className={styles.profile}>Profile</h1>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.sideTableWrapper}>
            <div className={styles.sideTable}>
              <div className={styles.basicInformation}>Basic Information</div>
            </div>
          </div>
          <div className={styles.sideTableContainer}>
            <div className={styles.sideTable1}>
              <div className={styles.basicInformation1}>
                Educational Qualifiation
              </div>
            </div>
          </div>
          <div className={styles.sideTableFrame}>
            <div className={styles.sideTable2}>
              <div className={styles.basicInformation2}>Working Eperiance</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.sideTable3}>
              <div className={styles.basicInformation3}>Certification</div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              loading="eager"
              alt=""
              src="/rectangle-1@2x.png"
            />
            <div className={styles.frameWrapper1}>
              <div className={styles.chooseNewProfileWrapper}>
                <div
                  className={styles.chooseNewProfile}
                >{`Choose New Profile `}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent4;
