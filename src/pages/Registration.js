import Profile from "../components/Profile";
import styles from "./Registration.module.css";
import MainSidebar from "../components/MainSidebar";

const Registration = () => {
  return (
    <div className={styles.registration}>
      {/* <div className={styles.mainSidebar}>
        <div className={styles.profileParent}>
          <Profile pic="/pic@2x.png" propMargin="unset" />
          <div className={styles.frameWrapper}>
            <nav className={styles.icondashboardParent}>
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
              <button className={styles.icondashboard2}>
                <div className={styles.registrationParent}>
                  <img
                    className={styles.registrationIcon}
                    alt=""
                    src="/registration.svg"
                  />
                  <div className={styles.dashboard4}>
                    <div className={styles.dashboard5}>Registration</div>
                  </div>
                </div>
              </button>
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
            </nav>
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
      <section className={styles.registrationInner}>
        <div className={styles.newPatientRegistrationFormParent}>
          <h1 className={styles.newPatientRegistration}>
            New Patient Registration Form
          </h1>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.firstNameParent}>
                <div className={styles.firstName}>First Name</div>
                <input className={styles.form} type="text" />
              </div>
              <div className={styles.dateOfBirthmonthdayyearParent}>
                <div className={styles.dateOfBirthmonthdayyear}>
                  Date of Birth(month/Day/Year)
                </div>
                <div className={styles.formParent}>
                  <input className={styles.form1} type="text" />
                  <input className={styles.form2} type="text" />
                  <input className={styles.form3} type="text" />
                </div>
              </div>
              <div className={styles.contactParent}>
                <div className={styles.contact}>Contact</div>
                <input className={styles.form4} type="text" />
              </div>
              <div className={styles.adressParent}>
                <div className={styles.adress}>Adress</div>
                <input className={styles.form5} type="text" />
              </div>
              <div className={styles.martialStatusParent}>
                <div className={styles.martialStatus}>Martial Status</div>
                <input className={styles.form6} type="text" />
              </div>
              <div className={styles.takingAnyMedicationsParent}>
                <div className={styles.takingAnyMedications}>
                  Taking Any Medications
                </div>
                <input className={styles.form7} type="text" />
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.lastNameParent}>
                  <div className={styles.lastName}>Last Name</div>
                  <input className={styles.form8} type="text" />
                </div>
                <div className={styles.sexParent}>
                  <div className={styles.sex}>Sex</div>
                  <input className={styles.form9} type="text" />
                </div>
                <div className={styles.emailParent}>
                  <div className={styles.email}>Email</div>
                  <input className={styles.form10} type="text" />
                </div>
                <div className={styles.postalCodeParent}>
                  <div className={styles.postalCode}>Postal Code</div>
                  <input className={styles.form11} type="text" />
                </div>
                <div className={styles.emergencyContactParent}>
                  <div className={styles.emergencyContact}>
                    Emergency Contact
                  </div>
                  <input className={styles.form12} type="text" />
                </div>
                <div className={styles.ifYesListItHereParent}>
                  <div className={styles.ifYesList}>If Yes List it here</div>
                  <input className={styles.form13} type="text" />
                </div>
              </div>
              <div className={styles.button}>
                <button className={styles.buttonInner}>
                  <div className={styles.acceptWrapper}>
                    <div className={styles.accept}>Submit</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
