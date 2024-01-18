import Profile from "../components/Profile";
import TableList1 from "../components/TableList1";
import styles from "./Patients.module.css";
import MainSidebar from "../components/MainSidebar";

const Patients = () => {
  return (
    <div className={styles.patients}>
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
      {/* <div className={styles.mainSidebar}>
        <div className={styles.profileParent}>
          <Profile pic="/pic@2x.png" propMargin="unset" />
          <div className={styles.frameWrapper}>
            <div className={styles.icondashboardParent}>
              <div className={styles.icondashboard}>
                <img
                  className={styles.materialSymbolsdashboardOutIcon}
                  loading="eager"
                  alt=""
                  src="/materialsymbolsdashboardoutline1.svg"
                />
                <div className={styles.dashboard}>
                  <div className={styles.dashboard1}>Dashboard</div>
                </div>
              </div>
              <div className={styles.icondashboard1}>
                <img
                  className={styles.appointmentIcon}
                  loading="eager"
                  alt=""
                  src="/appointment.svg"
                />
                <div className={styles.dashboard2}>
                  <div className={styles.dashboard3}>Appointments</div>
                </div>
              </div>
              <div className={styles.icondashboard2}>
                <img
                  className={styles.registrationIcon}
                  loading="eager"
                  alt=""
                  src="/registration.svg"
                />
                <div className={styles.dashboard4}>
                  <div className={styles.dashboard5}>Registration</div>
                </div>
              </div>
              <button className={styles.icondashboard3}>
                <div className={styles.userParent}>
                  <img className={styles.userIcon} alt="" src="/user.svg" />
                  <div className={styles.dashboard6}>
                    <div className={styles.dashboard7}>Patients</div>
                  </div>
                </div>
              </button>
              <div className={styles.icondashboard4}>
                <img
                  className={styles.profileIcon}
                  loading="eager"
                  alt=""
                  src="/profile@2x.png"
                />
                <div className={styles.dashboard8}>
                  <div className={styles.dashboard9}>Profile</div>
                </div>
              </div>
              <div className={styles.icondashboard5}>
                <div className={styles.materialSymbolsdashboardOutParent}>
                  <img
                    className={styles.materialSymbolsdashboardOutIcon1}
                    alt=""
                    src="/materialsymbolsdashboardoutline.svg"
                  />
                  <div className={styles.dashboard10}>
                    <div className={styles.dashboard11}>Dashboard</div>
                  </div>
                </div>
              </div>
              <div className={styles.icondashboard6}>
                <div className={styles.materialSymbolsdashboardOutGroup}>
                  <img
                    className={styles.materialSymbolsdashboardOutIcon2}
                    alt=""
                    src="/materialsymbolsdashboardoutline.svg"
                  />
                  <div className={styles.dashboard12}>
                    <div className={styles.dashboard13}>Dashboard</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.materialSymbolslogoutSharpParent}>
          <img
            className={styles.materialSymbolslogoutSharpIcon}
            loading="eager"
            alt=""
            src="/materialsymbolslogoutsharp.svg"
          />
          <div className={styles.logout}>Logout</div>
        </div>
      </div> */}
      <div className={styles.patientsInner}>
        <div className={styles.frameParent}>
          <div className={styles.patientsParent}>
            <h2 className={styles.patients1}>Patients</h2>
            <button className={styles.bisearchParent}>
              <img className={styles.bisearchIcon} alt="" src="/bisearch.svg" />
              <div className={styles.search}>Search</div>
            </button>
          </div>
          <div className={styles.tableHeadParent}>
            <header className={styles.tableHead}>
              <button className={styles.table}>
                <div className={styles.patientName}>Patient Name</div>
              </button>
              <button className={styles.table1}>
                <div className={styles.patientName1}>Phone Number</div>
              </button>
              <button className={styles.table2}>
                <div className={styles.patientName2}>Syndrome</div>
              </button>
              <button className={styles.table3}>
                <div className={styles.patientName3}>{`Date & Time`}</div>
              </button>
            </header>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <main className={styles.tableListParent}>
                  <TableList1
                    ellipse1="/ellipse-12@2x.png"
                    line2="/line-21.svg"
                    propPadding1="var(--padding-smi) var(--padding-xl) var(--padding-sm) var(--padding-2xl)"
                    propPadding2="var(--padding-smi) var(--padding-8xs) var(--padding-sm)"
                    propMixBlendMode="overlay"
                  />
                  <TableList1
                    ellipse1="/ellipse-1-1@2x.png"
                    line2="/line-21.svg"
                    propHeight="64px"
                    propPadding="0px 0px 0px"
                    propPadding1="var(--padding-sm) var(--padding-xl) var(--padding-smi) var(--padding-2xl)"
                    propPadding2="var(--padding-sm) var(--padding-8xs) var(--padding-smi)"
                    propMixBlendMode="unset"
                  />
                  <TableList1
                    ellipse1="/ellipse-12@2x.png"
                    line2="/line-21.svg"
                    propHeight="unset"
                    propPadding="unset"
                    propPadding1="var(--padding-smi) var(--padding-xl) var(--padding-sm) var(--padding-2xl)"
                    propPadding2="var(--padding-smi) var(--padding-8xs) var(--padding-sm)"
                    propMixBlendMode="unset"
                  />
                  <TableList1
                    ellipse1="/ellipse-1-1@2x.png"
                    line2="/line-21.svg"
                    propHeight="64px"
                    propPadding="0px 0px 0px"
                    propPadding1="var(--padding-sm) var(--padding-xl) var(--padding-smi) var(--padding-2xl)"
                    propPadding2="var(--padding-sm) var(--padding-8xs) var(--padding-smi)"
                    propMixBlendMode="unset"
                  />
                  <TableList1
                    ellipse1="/ellipse-12@2x.png"
                    line2="/line-21.svg"
                    propHeight="unset"
                    propPadding="unset"
                    propPadding1="var(--padding-smi) var(--padding-xl) var(--padding-sm) var(--padding-2xl)"
                    propPadding2="var(--padding-smi) var(--padding-8xs) var(--padding-sm)"
                    propMixBlendMode="unset"
                  />
                  <TableList1
                    ellipse1="/ellipse-1-1@2x.png"
                    line2="/line-21.svg"
                    propHeight="64px"
                    propPadding="0px 0px 0px"
                    propPadding1="var(--padding-sm) var(--padding-xl) var(--padding-smi) var(--padding-2xl)"
                    propPadding2="var(--padding-sm) var(--padding-8xs) var(--padding-smi)"
                    propMixBlendMode="unset"
                  />
                  <TableList1
                    ellipse1="/ellipse-12@2x.png"
                    line2="/line-21.svg"
                    propHeight="unset"
                    propPadding="unset"
                    propPadding1="var(--padding-smi) var(--padding-xl) var(--padding-sm) var(--padding-2xl)"
                    propPadding2="var(--padding-smi) var(--padding-8xs) var(--padding-sm)"
                    propMixBlendMode="unset"
                  />
                  <TableList1
                    ellipse1="/ellipse-1-1@2x.png"
                    line2="/line-21.svg"
                    propHeight="64px"
                    propPadding="0px 0px 0px"
                    propPadding1="var(--padding-sm) var(--padding-xl) var(--padding-smi) var(--padding-2xl)"
                    propPadding2="var(--padding-sm) var(--padding-8xs) var(--padding-smi)"
                    propMixBlendMode="unset"
                  />
                  <TableList1
                    ellipse1="/ellipse-12@2x.png"
                    line2="/line-21.svg"
                    propHeight="unset"
                    propPadding="unset"
                    propPadding1="var(--padding-smi) var(--padding-xl) var(--padding-sm) var(--padding-2xl)"
                    propPadding2="var(--padding-smi) var(--padding-8xs) var(--padding-sm)"
                    propMixBlendMode="unset"
                  />
                  <TableList1
                    ellipse1="/ellipse-1-1@2x.png"
                    line2="/line-21.svg"
                    propHeight="64px"
                    propPadding="0px 0px 0px"
                    propPadding1="var(--padding-sm) var(--padding-xl) var(--padding-smi) var(--padding-2xl)"
                    propPadding2="var(--padding-sm) var(--padding-8xs) var(--padding-smi)"
                    propMixBlendMode="unset"
                  />
                </main>
              </div>
            </div>
            <div className={styles.frameChild} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
