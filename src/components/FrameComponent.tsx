import { useMemo } from "react";
import LOGOCareHub from "./LOGOCareHub";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  className = "",
  frameDivWidth,
  frameDivHeight,
  frameDivFlex,
  frameDivHeight1,
  frameDivWidth1,
  frameDivFlex1,
  frameDivHeight2,
  frameDivWidth2,
  careHubAlignSelf,
  careHubWidth,
  frameDivAlignSelf,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      width: frameDivWidth,
      height: frameDivHeight,
    };
  }, [frameDivWidth, frameDivHeight]);

  const frameDiv5Style = useMemo(() => {
    return {
      flex: frameDivFlex,
      height: frameDivHeight1,
      width: frameDivWidth1,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivFlex, frameDivHeight1, frameDivWidth1, frameDivAlignSelf]);

  const frameDiv6Style = useMemo(() => {
    return {
      flex: frameDivFlex1,
      height: frameDivHeight2,
      width: frameDivWidth2,
    };
  }, [frameDivFlex1, frameDivHeight2, frameDivWidth2]);

  const careHub1Style = useMemo(() => {
    return {
      alignSelf: careHubAlignSelf,
      width: careHubWidth,
    };
  }, [careHubAlignSelf, careHubWidth]);

  return (
    <div
      className={[styles.frameWrapper, className].join(" ")}
      style={frameDiv4Style}
    >
      <div className={styles.logoCarehubParent} style={frameDiv5Style}>
        <LOGOCareHub
          line1="/line-1.svg"
          ellipse1="/ellipse-1.svg"
          line8="/line-8.svg"
          line2="/line-2.svg"
          line3="/line-3.svg"
          line4="/line-4.svg"
          line5="/line-5.svg"
          line6="/line-6.svg"
          line7="/line-7.svg"
        />
        <div className={styles.carehubWrapper} style={frameDiv6Style}>
          <a className={styles.carehub} style={careHub1Style}>
            CareHub
          </a>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivWidth: PropTypes.string,
  frameDivHeight: PropTypes.string,
  frameDivFlex: PropTypes.string,
  frameDivHeight1: PropTypes.string,
  frameDivWidth1: PropTypes.string,
  frameDivFlex1: PropTypes.string,
  frameDivHeight2: PropTypes.string,
  frameDivWidth2: PropTypes.string,
  careHubAlignSelf: PropTypes.string,
  careHubWidth: PropTypes.string,
  frameDivAlignSelf: PropTypes.string,
};

export default FrameComponent;
