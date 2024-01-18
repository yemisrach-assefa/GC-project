import { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./MainSidebar.module.css";

const MainSidebar = ({
  pic,
  materialSymbolsdashboardO,
  appointment,
  registration,
  user1,
  profile,
  materialSymbolsdashboardO1,
  materialSymbolsdashboardO2,
  materialSymbolslogoutShar,
  frameDivMinWidth,
}) => {
  const mainSidebarStyle = useMemo(() => {
    return {
      minWidth: frameDivMinWidth,
    };
  }, [frameDivMinWidth]);

  return (
    <div className={styles.mainSidebar} style={mainSidebarStyle}>
      <div className={styles.profileParent}>
        <div className={styles.profile}>
          <img className={styles.picIcon} loading="eager" alt="" src={pic} />
          <div className={styles.name}>
            <div className={styles.drabebeMesfin}>Ms Loza Mekonen</div>
            <div className={styles.generalDoctor}>General Doctor</div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <nav className={styles.icondashboardParent}>
            <Link to="/">
              <div className={styles.icondashboard}>
                <img
                  className={styles.materialSymbolsdashboardOutIcon}
                  loading="eager"
                  alt=""
                  src={materialSymbolsdashboardO}
                />
                <div className={styles.dashboard}>
                  <div className={styles.dashboard1}>Dashboard</div>
                </div>
              </div>
            </Link>
            <Link to="/appointments">
              <button className={styles.icondashboard1}>
                <div className={styles.appointmentParent}>
                  <img
                    className={styles.appointmentIcon}
                    alt=""
                    src={appointment}
                  />
                  <div className={styles.dashboard2}>
                    <div className={styles.dashboard3}>Appointments</div>
                  </div>
                </div>
              </button>
            </Link>
            <Link to="/registration">
              <div className={styles.icondashboard2}>
                <img
                  className={styles.registrationIcon}
                  loading="eager"
                  alt=""
                  src={registration}
                />
                <div className={styles.dashboard4}>
                  <div className={styles.dashboard5}>Registration</div>
                </div>
              </div>
            </Link>
            <Link to="/patients">
              <div className={styles.icondashboard3}>
                <img
                  className={styles.userIcon}
                  loading="eager"
                  alt=""
                  src={user1}
                />
                <div className={styles.dashboard6}>
                  <div className={styles.dashboard7}>Patients</div>
                </div>
              </div>
            </Link>
            <Link to="/profile">
              <div className={styles.icondashboard4}>
                <img
                  className={styles.profileIcon}
                  loading="eager"
                  alt=""
                  src={profile}
                />
                <div className={styles.dashboard8}>
                  <div className={styles.dashboard9}>Profile</div>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className={styles.icondashboard5}>
                <div className={styles.materialSymbolsdashboardOutParent}>
                  <img
                    className={styles.materialSymbolsdashboardOutIcon1}
                    alt=""
                    src={materialSymbolsdashboardO1}
                  />
                  <div className={styles.dashboard10}>
                    <div className={styles.dashboard11}>Dashboard</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/">
              <div className={styles.icondashboard6}>
                <div className={styles.materialSymbolsdashboardOutGroup}>
                  <img
                    className={styles.materialSymbolsdashboardOutIcon2}
                    alt=""
                    src={materialSymbolsdashboardO2}
                  />
                  <div className={styles.dashboard12}>
                    <div className={styles.dashboard13}>Dashboard</div>
                  </div>
                </div>
              </div>
            </Link>
          </nav>
        </div>
      </div>
      <div className={styles.materialSymbolslogoutSharpParent}>
        <img
          className={styles.materialSymbolslogoutSharpIcon}
          loading="eager"
          alt=""
          src={materialSymbolslogoutShar}
        />
        <div className={styles.logout}>Logout</div>
      </div>
    </div>
  );
};

export default MainSidebar;
