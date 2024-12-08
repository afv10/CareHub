import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <FrameComponent />
      <div className={styles.loginDescription}>
        <b className={styles.hello}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.hello1}>Hello</p>
        </b>
        <div className={styles.wereHereToContainer}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            We're here to support you in managing Parkinson's Disease.
          </p>
        </div>
        <div className={styles.pleaseLoginOr}>
          Please login or sign up to continue.
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
