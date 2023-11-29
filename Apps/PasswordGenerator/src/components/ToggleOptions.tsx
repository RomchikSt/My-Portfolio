import { Box, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";

function ToggleOptions() {
  const options = ["Uppercase", "Lowercase", "Numbers", "Symbols"];

  return (
    <Box
      m={"2rem"}
      pl={"8px"}
      display={"flex"}
      flexDirection={"column"}
      sx={{
        width: "100%",
      }}
    >
      {options.map((option) => (
        <Box
          display={"flex"}
          key={option}
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body1"
            fontSize={16}
            color={"#fff"}
            display={"flex"}
            alignItems={"center"}
          >
            {option}
          </Typography>
          <Switch />
        </Box>
      ))}
    </Box>
  );
}

export default ToggleOptions;
