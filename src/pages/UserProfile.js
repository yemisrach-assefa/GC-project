import Profile from "../components/Profile";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./Profile.module.css";
import MainSidebar from "../components/MainSidebar";

const UserProfile = () => {
  return (
    <div className={styles.profile}>
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
              <div className={styles.icondashboard3}>
                <img
                  className={styles.userIcon}
                  loading="eager"
                  alt=""
                  src="/user.svg"
                />
                <div className={styles.dashboard6}>
                  <div className={styles.dashboard7}>Patients</div>
                </div>
              </div>
              <div className={styles.icondashboard4}>
                <div className={styles.profileGroup}>
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
      <section className={styles.profileInner}>
        <div className={styles.frameParent}>
          <FrameComponent4 />
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <FrameComponent3
                    userName="User Name"
                    propPadding="0px 0px 0px var(--padding-3xs)"
                  />
                  <FrameComponent3
                    userName="First Name"
                    propPadding="0px var(--padding-8xs)"
                    propFlex="1"
                  />
                  <div className={styles.lastNameParent}>
                    <div className={styles.lastName}>Last Name</div>
                    <input className={styles.form} type="text" />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.emailParent}>
                  <div className={styles.email}>Email</div>
                  <input className={styles.form1} type="text" />
                </div>
                <div className={styles.passwordParent}>
                  <div className={styles.password}>Password</div>
                  <input className={styles.form2} type="text" />
                </div>
                <div className={styles.confirmPasswordParent}>
                  <div className={styles.confirmPassword}>Confirm Password</div>
                  <input className={styles.form3} type="text" />
                </div>
                <div className={styles.editWrapper}>
                  <h3 className={styles.edit}>Edit</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
