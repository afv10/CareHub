import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div>
          <div className={styles.emailWrapper}>
            <div className={styles.email}>Email:</div>
          </div>
          <TextField
            className={styles.frameChild}
            variant="outlined"
            type="email"
            sx={{
              "& fieldset": { borderColor: "#000" },
              "& .MuiInputBase-root": {
                height: "84px",
                backgroundColor: "#fff",
                borderRadius: "12px",
              },
            }}
          />
        </div>
        <TextField
          className={styles.frameItem}
          color="primary"
          name="Password"
          id="passwodID"
          label="Password"
          required={true}
          type="password"
        />
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
