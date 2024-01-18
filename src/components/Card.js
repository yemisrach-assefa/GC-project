import { useMemo } from "react";
import styles from "./Card.module.css";

const Card = ({
  group1,
  totalPatients,
  prop,
  propPadding,
  propPadding1,
  propPadding2,
  propColor,
}) => {
  const cardStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const bStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.frameParent} style={frameDivStyle}>
        <img
          className={styles.frameChild}
          loading="eager"
          alt=""
          src={group1}
        />
        <div className={styles.totalPatientsParent}>
          <div className={styles.totalPatients}>{totalPatients}</div>
          <div className={styles.wrapper} style={frameDiv1Style}>
            <b className={styles.b} style={bStyle}>
              {prop}
            </b>
          </div>
          <div className={styles.tillToday}>Till Today</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
