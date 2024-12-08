import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./LOGOCareHub.module.css";

const LOGOCareHub = ({
  className = "",
  line1,
  ellipse1,
  line8,
  line2,
  line3,
  line4,
  lineIconLeft,
  lineIconRight,
  line5,
  line6,
  line7,
  lOGOCareHubAlignSelf,
  lOGOCareHubHeight,
  ellipseIconAlignSelf,
  ellipseIconFlex,
  ellipseIconOverflow,
  ellipseIconMaxHeight,
  ellipseIconWidth,
  ellipseIconHeight,
  frameDivAlignSelf,
  frameDivWidth,
  careHubAlignSelf,
  careHubFlex,
  careHubHeight,
  careHubWidth,
  careHubDisplay,
}) => {
  const lineIconStyle = useMemo(() => {
    return {
      left: lineIconLeft,
      right: lineIconRight,
    };
  }, [lineIconLeft, lineIconRight]);

  const lOGOCareHubStyle = useMemo(() => {
    return {
      alignSelf: lOGOCareHubAlignSelf,
      height: lOGOCareHubHeight,
    };
  }, [lOGOCareHubAlignSelf, lOGOCareHubHeight]);

  const ellipseIconStyle = useMemo(() => {
    return {
      alignSelf: ellipseIconAlignSelf,
      flex: ellipseIconFlex,
      overflow: ellipseIconOverflow,
      maxHeight: ellipseIconMaxHeight,
      width: ellipseIconWidth,
      height: ellipseIconHeight,
    };
  }, [
    ellipseIconAlignSelf,
    ellipseIconFlex,
    ellipseIconOverflow,
    ellipseIconMaxHeight,
    ellipseIconWidth,
    ellipseIconHeight,
  ]);

  const frameDiv3Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      width: frameDivWidth,
    };
  }, [frameDivAlignSelf, frameDivWidth]);

  const careHubStyle = useMemo(() => {
    return {
      alignSelf: careHubAlignSelf,
      flex: careHubFlex,
      height: careHubHeight,
      width: careHubWidth,
      display: careHubDisplay,
    };
  }, [
    careHubAlignSelf,
    careHubFlex,
    careHubHeight,
    careHubWidth,
    careHubDisplay,
  ]);

  return (
    <div
      className={[styles.logoCarehub, className].join(" ")}
      style={lOGOCareHubStyle}
    >
      <img className={styles.logoCarehubChild} alt="" src={line1} />
      <img
        className={styles.logoCarehubItem}
        alt=""
        src={ellipse1}
        style={ellipseIconStyle}
      />
      <img
        className={styles.logoCarehubInner}
        loading="lazy"
        alt=""
        src={line8}
      />
      <img className={styles.lineIcon} alt="" src={line2} />
      <img className={styles.logoCarehubChild1} alt="" src={line3} />
      <img
        className={styles.logoCarehubChild2}
        alt=""
        src={line4}
        style={lineIconStyle}
      />
      <img className={styles.logoCarehubChild3} alt="" src={line5} />
      <img className={styles.logoCarehubChild4} alt="" src={line6} />
      <img
        className={styles.logoCarehubChild5}
        loading="lazy"
        alt=""
        src={line7}
      />
      <div className={styles.carehubWrapper} style={frameDiv3Style}>
        <b className={styles.carehub} style={careHubStyle} />
      </div>
    </div>
  );
};

LOGOCareHub.propTypes = {
  className: PropTypes.string,
  line1: PropTypes.string,
  ellipse1: PropTypes.string,
  line8: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string,
  line4: PropTypes.string,
  line5: PropTypes.string,
  line6: PropTypes.string,
  line7: PropTypes.string,

  /** Style props */
  lineIconLeft: PropTypes.string,
  lineIconRight: PropTypes.string,
  lOGOCareHubAlignSelf: PropTypes.string,
  lOGOCareHubHeight: PropTypes.string,
  ellipseIconAlignSelf: PropTypes.string,
  ellipseIconFlex: PropTypes.string,
  ellipseIconOverflow: PropTypes.string,
  ellipseIconMaxHeight: PropTypes.string,
  ellipseIconWidth: PropTypes.string,
  ellipseIconHeight: PropTypes.string,
  frameDivAlignSelf: PropTypes.string,
  frameDivWidth: PropTypes.string,
  careHubAlignSelf: PropTypes.string,
  careHubFlex: PropTypes.string,
  careHubHeight: PropTypes.string,
  careHubWidth: PropTypes.string,
  careHubDisplay: PropTypes.string,
};

export default LOGOCareHub;
