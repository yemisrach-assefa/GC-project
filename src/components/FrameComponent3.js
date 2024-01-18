import { useMemo } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ userName, propPadding, propFlex }) => {
  const frameDiv5Style = useMemo(() => {
    return {
      padding: propPadding,
      flex: propFlex,
    };
  }, [propPadding, propFlex]);

  return (
    <div className={styles.frameWrapper} style={frameDiv5Style}>
      <div className={styles.userNameParent}>
        <div className={styles.userName}>{userName}</div>
        <input className={styles.form} type="text" />
      </div>
    </div>
  );
};

export default FrameComponent3;
