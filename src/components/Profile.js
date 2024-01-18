import { useMemo } from "react";
import styles from "./Profile.module.css";

const Profile = ({ pic, propMargin }) => {
  const drAbebeMesfinStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className={styles.profile}>
      <img className={styles.picIcon} loading="eager" alt="" src={pic} />
      <div className={styles.name}>
        <h2 className={styles.drabebeMesfin} style={drAbebeMesfinStyle}>
          Ms Loza Mekonen
        </h2>
        <div className={styles.generalDoctor}>General Doctor</div>
      </div>
    </div>
  );
};

export default Profile;
