import { Button } from "@mui/material";
import HeaderOfPhone from "../components/HeaderOfPhone";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <section className={styles.frameParent}>
        <header className={styles.phoneHeaderWrapper}>
          <div className={styles.phoneHeader}>
            <HeaderOfPhone
              signal="/signal.svg"
              wifi="/wifi.svg"
              batteryHalf="/batteryhalf.svg"
            />
          </div>
        </header>
        <FrameComponent1 />
        <FrameComponent2 />
      </section>
      <section className={styles.loginPageInner}>
        <div className={styles.signupButtonParent}>
          <Button
            className={styles.signupButton}
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "24",
              borderColor: "#000",
              borderRadius: "12px",
              "&:hover": { borderColor: "#000" },
              height: 80,
            }}
          >
            Sign Up
          </Button>
          <Button
            className={styles.loginButton}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "24",
              background: "#95febf",
              border: "#000 solid 1px",
              borderRadius: "12px",
              "&:hover": { background: "#95febf" },
              height: 80,
            }}
          >
            Login
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
