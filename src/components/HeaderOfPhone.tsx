import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./HeaderOfPhone.module.css";

const HeaderOfPhone = ({
  className = "",
  signal,
  wifi,
  batteryHalf,
  headerOfPhoneFlex,
  headerOfPhoneJustifyContent,
  headerOfPhoneGap,
  headerOfPhoneWidth,
  headerOfPhoneHeight,
  frameDivHeight,
  aAlignSelf,
  aWidth,
  aHeight,
  aDisplay,
  frameDivHeight1,
  frameDivWidth,
  frameDivHeight2,
  wifiIconMinHeight,
}) => {
  const headerOfPhoneStyle = useMemo(() => {
    return {
      flex: headerOfPhoneFlex,
      justifyContent: headerOfPhoneJustifyContent,
      gap: headerOfPhoneGap,
      width: headerOfPhoneWidth,
      height: headerOfPhoneHeight,
    };
  }, [
    headerOfPhoneFlex,
    headerOfPhoneJustifyContent,
    headerOfPhoneGap,
    headerOfPhoneWidth,
    headerOfPhoneHeight,
  ]);

  const frameDivStyle = useMemo(() => {
    return {
      height: frameDivHeight,
    };
  }, [frameDivHeight]);

  const aStyle = useMemo(() => {
    return {
      alignSelf: aAlignSelf,
      width: aWidth,
      height: aHeight,
      display: aDisplay,
    };
  }, [aAlignSelf, aWidth, aHeight, aDisplay]);

  const frameDiv1Style = useMemo(() => {
    return {
      height: frameDivHeight1,
      width: frameDivWidth,
    };
  }, [frameDivHeight1, frameDivWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      height: frameDivHeight2,
    };
  }, [frameDivHeight2]);

  const wifiIconStyle = useMemo(() => {
    return {
      minHeight: wifiIconMinHeight,
    };
  }, [wifiIconMinHeight]);

  return (
    <div
      className={[styles.headerOfPhone, className].join(" ")}
      style={headerOfPhoneStyle}
    >
      <div className={styles.wrapper} style={frameDivStyle}>
        <a className={styles.a} style={aStyle}>
          13:07
        </a>
      </div>
      <div className={styles.frameParent} style={frameDiv1Style}>
        <div className={styles.signalWrapper} style={frameDiv2Style}>
          <img
            className={styles.signalIcon}
            loading="lazy"
            alt=""
            src={signal}
          />
        </div>
        <img
          className={styles.wifiIcon}
          loading="lazy"
          alt=""
          src={wifi}
          style={wifiIconStyle}
        />
        <img
          className={styles.batteryHalfIcon}
          loading="lazy"
          alt=""
          src={batteryHalf}
        />
      </div>
    </div>
  );
};

HeaderOfPhone.propTypes = {
  className: PropTypes.string,
  signal: PropTypes.string,
  wifi: PropTypes.string,
  batteryHalf: PropTypes.string,

  /** Style props */
  headerOfPhoneFlex: PropTypes.string,
  headerOfPhoneJustifyContent: PropTypes.string,
  headerOfPhoneGap: PropTypes.string,
  headerOfPhoneWidth: PropTypes.string,
  headerOfPhoneHeight: PropTypes.string,
  frameDivHeight: PropTypes.string,
  aAlignSelf: PropTypes.string,
  aWidth: PropTypes.string,
  aHeight: PropTypes.string,
  aDisplay: PropTypes.string,
  frameDivHeight1: PropTypes.string,
  frameDivWidth: PropTypes.string,
  frameDivHeight2: PropTypes.string,
  wifiIconMinHeight: PropTypes.string,
};

export default HeaderOfPhone;
