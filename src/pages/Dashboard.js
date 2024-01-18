import Profile from "../components/Profile";
import Card from "../components/Card";
import FrameComponent from "../components/FrameComponent";
import styles from "./Dashboard.module.css";
import MainSidebar from "../components/MainSidebar";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
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
          <Profile pic="/pic@2x.png" propMargin="0" />
          <div className={styles.frameWrapper}>
            <div className={styles.icondashboardParent}>
              <button className={styles.icondashboard}>
                <div className={styles.materialSymbolsdashboardOutParent}>
                  <img
                    className={styles.materialSymbolsdashboardOutIcon}
                    alt=""
                    src="/materialsymbolsdashboardoutline.svg"
                  />
                  <div className={styles.dashboard1}>
                    <div className={styles.dashboard2}>Dashboard</div>
                  </div>
                </div>
              </button>
              <div className={styles.icondashboard1}>
                <img
                  className={styles.appointmentIcon}
                  loading="eager"
                  alt=""
                  src="/appointment.svg"
                />
                <div className={styles.dashboard3}>
                  <h2 className={styles.dashboard4}>Appointments</h2>
                </div>
              </div>
              <div className={styles.icondashboard2}>
                <img
                  className={styles.registrationIcon}
                  loading="eager"
                  alt=""
                  src="/registration.svg"
                />
                <div className={styles.dashboard5}>
                  <h2 className={styles.dashboard6}>Registration</h2>
                </div>
              </div>
              <div className={styles.icondashboard3}>
                <img
                  className={styles.userIcon}
                  loading="eager"
                  alt=""
                  src="/user.svg"
                />
                <div className={styles.dashboard7}>
                  <h2 className={styles.dashboard8}>Patients</h2>
                </div>
              </div>
              <div className={styles.icondashboard4}>
                <img
                  className={styles.profileIcon}
                  loading="eager"
                  alt=""
                  src="/profile@2x.png"
                />
                <div className={styles.dashboard9}>
                  <h2 className={styles.dashboard10}>Profile</h2>
                </div>
              </div>
              <div className={styles.icondashboard5}>
                <div className={styles.materialSymbolsdashboardOutGroup}>
                  <img
                    className={styles.materialSymbolsdashboardOutIcon1}
                    alt=""
                    src="/materialsymbolsdashboardoutline.svg"
                  />
                  <div className={styles.dashboard11}>
                    <div className={styles.dashboard12}>Dashboard</div>
                  </div>
                </div>
              </div>
              <div className={styles.icondashboard6}>
                <div className={styles.materialSymbolsdashboardOutContainer}>
                  <img
                    className={styles.materialSymbolsdashboardOutIcon2}
                    alt=""
                    src="/materialsymbolsdashboardoutline.svg"
                  />
                  <div className={styles.dashboard13}>
                    <div className={styles.dashboard14}>Dashboard</div>
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
          <h2 className={styles.logout}>Logout</h2>
        </div>
      </div> */}
      <main className={styles.dashboardInner}>
        <section className={styles.frameParent}>
          <div className={styles.dashboardParent}>
            <h1 className={styles.dashboard15}>Dashboard</h1>
            <img
              className={styles.screenshot202401031015311}
              loading="eager"
              alt=""
              src="/screenshot-20240103-101531-1@2x.png"
            />
          </div>
          <div className={styles.frameGroup}>
            <nav className={styles.cardParent}>
              <Card
                group1="/group-1.svg"
                totalPatients="Total patients"
                prop="1200+"
                propPadding="var(--padding-8xl) 34px var(--padding-8xl) 37px"
                propPadding2="0px var(--padding-5xs) 0px var(--padding-10xs)"
                propColor="#478342"
              />
              <Card
                group1="/group-1-1.svg"
                totalPatients="Today patients"
                prop="500"
                propPadding="var(--padding-8xl) var(--padding-8xl) var(--padding-8xl) var(--padding-12xl)"
                propPadding1="0px var(--padding-12xs) 0px 0px"
                propPadding2="0px 26px 0px var(--padding-xl)"
                propColor="#34b5c8"
              />
              <div className={styles.card}>
                <div className={styles.frameContainer}>
                  <img
                    className={styles.frameChild}
                    loading="eager"
                    alt=""
                    src="/group-1-2.svg"
                  />
                  <div className={styles.totalPatientsParent}>
                    <div className={styles.totalPatients}>
                      Today Appointments
                    </div>
                    <div className={styles.wrapper}>
                      <b className={styles.b}>120</b>
                    </div>
                    <div className={styles.tillTodayWrapper}>
                      <div className={styles.tillToday}>Till Today</div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.patientsSummaryTillNow202Parent}>
                  <div className={styles.patientsSummaryTill}>
                    Patients Summary Till Now, 2024
                  </div>
                  <div className={styles.frameItem} />
                  <div className={styles.totalPatients1}>Total Patients</div>
                  <div className={styles.frameInner} />
                  <div className={styles.newPatients}>New Patients</div>
                  <div className={styles.ellipseDiv} />
                  <div className={styles.oldPatients}>Old Patients</div>
                  <div className={styles.chartParent}>
                    <img
                      className={styles.chartIcon}
                      loading="eager"
                      alt=""
                      src="/chart.svg"
                    />
                    <div className={styles.totalPatientsGroup}>
                      <div className={styles.totalPatients2}>
                        Total patients
                      </div>
                      <div className={styles.container}>
                        <b className={styles.b1}>50+</b>
                      </div>
                      <div className={styles.todayWrapper}>
                        <div className={styles.today}>Today</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.nextPatientDetailsWrapper}>
                    <div className={styles.nextPatientDetails}>
                      Next Patient Details
                    </div>
                  </div>
                  <div className={styles.patientName}>Heavy head ace</div>
                  <div className={styles.frameParent3}>
                    <FrameComponent
                      propDisplay="inline-block"
                      propDisplay1="inline-block"
                    />
                    <div className={styles.frameWrapper1}>
                      <div className={styles.seeAllParent}>
                        <div className={styles.seeAll}>
                          <div className={styles.seeAll1}>See More</div>
                        </div>
                        <div className={styles.acceptButtonWrapper}>
                          <div className={styles.acceptButton}>
                            <div className={styles.button}>
                              <button className={styles.buttonInner}>
                                <div className={styles.acceptWrapper}>
                                  <div className={styles.accept}>Accept</div>
                                </div>
                              </button>
                            </div>
                            <div className={styles.button1}>
                              <button className={styles.buttonChild}>
                                <div className={styles.cancelWrapper}>
                                  <div className={styles.cancel}>Cancel</div>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frameParent5}>
                  <div className={styles.nextPatientDetailsContainer}>
                    <div className={styles.nextPatientDetails1}>
                      Next Patient Details
                    </div>
                  </div>
                  <div className={styles.patientName1}>Heavy head ace</div>
                  <FrameComponent
                    propPadding="0px var(--padding-lgi) 0px 0px"
                    propDisplay="flex"
                    propPaddingRight="20px"
                    propWidth="50px"
                    propAlignSelf="stretch"
                    propPaddingRight1="var(--padding-9xs) 12px"
                    propWidth1="48px"
                    propAlignSelf1="stretch"
                    propPaddingRight2="var(--padding-3xs) var(--padding-5xs) 9px"
                    propDisplay1="flex"
                    propPaddingRight3="20px"
                  />
                  <div className={styles.frameWrapper2}>
                    <div className={styles.seeAllGroup}>
                      <div className={styles.seeAll2}>
                        <div className={styles.seeAll3}>See More</div>
                      </div>
                      <div className={styles.frameWrapper3}>
                        <div className={styles.buttonParent}>
                          <div className={styles.button2}>
                            <button className={styles.frameButton}>
                              <div className={styles.acceptContainer}>
                                <div className={styles.accept1}>Accept</div>
                              </div>
                            </button>
                          </div>
                          <div className={styles.button3}>
                            <button className={styles.buttonInner1}>
                              <div className={styles.cancelContainer}>
                                <div className={styles.cancel1}>Cancel</div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableParent}>
                  <div className={styles.table}>
                    <div className={styles.patientName2}>Patient Name</div>
                  </div>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.frameParent6}>
                      <div className={styles.todayAppointmentWrapper}>
                        <div className={styles.todayAppointment}>
                          Today Appointment
                        </div>
                      </div>
                      <div className={styles.frameParent7}>
                        <div className={styles.tableGroup}>
                          <div className={styles.table1}>
                            <div className={styles.patientName3}>
                              Patient Name
                            </div>
                          </div>
                          <div className={styles.table2}>
                            <img
                              className={styles.tableChild}
                              loading="eager"
                              alt=""
                              src="/ellipse-1-2@2x.png"
                            />
                            <div className={styles.patientName4}>
                              Abenet Abebe
                            </div>
                          </div>
                          <div className={styles.table3}>
                            <img
                              className={styles.tableItem}
                              loading="eager"
                              alt=""
                              src="/ellipse-1-2@2x.png"
                            />
                            <div className={styles.patientName5}>
                              Abenet Abebe
                            </div>
                          </div>
                          <div className={styles.table4}>
                            <img
                              className={styles.tableInner}
                              loading="eager"
                              alt=""
                              src="/ellipse-1-2@2x.png"
                            />
                            <div className={styles.patientName6}>
                              Abenet Abebe
                            </div>
                          </div>
                          <div className={styles.table5}>
                            <img
                              className={styles.ellipseIcon}
                              loading="eager"
                              alt=""
                              src="/ellipse-1-2@2x.png"
                            />
                            <div className={styles.patientName7}>
                              Abenet Abebe
                            </div>
                          </div>
                        </div>
                        <div className={styles.tableContainer}>
                          <div className={styles.table6}>
                            <div className={styles.patientName8}>Diagnosis</div>
                          </div>
                          <div className={styles.table7}>
                            <div className={styles.patientName9}>
                              Heavy head ace
                            </div>
                          </div>
                          <div className={styles.table8}>
                            <div className={styles.patientName10}>
                              Heavy head ace
                            </div>
                          </div>
                          <div className={styles.table9}>
                            <div className={styles.patientName11}>
                              Heavy head ace
                            </div>
                          </div>
                          <div className={styles.table10}>
                            <div className={styles.patientName12}>
                              Heavy head ace
                            </div>
                          </div>
                        </div>
                        <div className={styles.tableParent1}>
                          <div className={styles.table11}>
                            <div className={styles.patientName13}>Time</div>
                          </div>
                          <div className={styles.table12}>
                            <div className={styles.patientName14}>10:30pm</div>
                          </div>
                          <div className={styles.table13}>
                            <div className={styles.patientName15}>10:30pm</div>
                          </div>
                          <div className={styles.table14}>
                            <div className={styles.patientName16}>10:30pm</div>
                          </div>
                          <div className={styles.table15}>
                            <div className={styles.patientName17}>10:30pm</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.seeAll4}>
                    <div className={styles.seeAll5}>See All</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
