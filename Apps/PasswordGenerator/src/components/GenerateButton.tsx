import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

function GenerateButton() {
  return (
    <Button
      variant="contained"
      sx={{
        minWidth: "100%",
        marginTop: "2rem",
        minHeight: "4rem",
        borderRadius: "1rem",
      }}
    >
      <Typography variant="h6">Generate Password</Typography>
    </Button>
  );
}

export default GenerateButton;
