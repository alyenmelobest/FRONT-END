import * as C from "./styles.js";
import Logo from "../../assets/logo.png";
import { LinearProgress } from "@mui/material";

export const Header = ({ isLoading }) => {
  return (
    <C.Container>
      <img src={Logo} alt="Logo" />
      <p>Posts Feed</p>

      {isLoading && (
        <LinearProgress
          sx={{
            backgroundColor: "#00b37e",
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
          color="success"
        />
      )}
    </C.Container>
  );
};