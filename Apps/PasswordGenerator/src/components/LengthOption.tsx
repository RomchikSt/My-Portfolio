import { Box, Button, Typography } from "@mui/material";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 12,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 18,
    width: 18,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
});

function LengthOption() {
  return (
    <Box width={"100%"} textAlign={"center"} mt={"1rem"}>
      <Typography variant="h5" color={"#fff"}>
        Password Length
      </Typography>
      <Typography variant="h4" color={"#fff"}>
        16
      </Typography>
      <Box display={"flex"} mt={"1rem"}>
        <Button
          variant="outlined"
          sx={{
            minWidth: "1rem",
            marginRight: "1rem",
            borderRadius: "1rem",
          }}
        >
          <RemoveIcon />
        </Button>
        <PrettoSlider
          aria-label="custom thumb label"
          defaultValue={16}
          min={1}
          max={32}
        />
        <Button
          variant="contained"
          sx={{
            minWidth: "2rem",
            marginLeft: "1rem",
            borderRadius: "1rem",
          }}
        >
          <AddIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default LengthOption;
