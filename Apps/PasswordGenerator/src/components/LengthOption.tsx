import { Box, IconButton, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

function LengthOption() {
  return (
    <Box>
      <Typography variant="h5">Password Length</Typography>
      <Typography variant="h4">16</Typography>
      <Box>
        <IconButton>
          <RemoveCircleOutlineRoundedIcon />
        </IconButton>
        <Slider
          disabled={false}
          marks={false}
          defaultValue={16}
          max={32}
          min={0}
          size="medium"
          valueLabelDisplay="auto"
        />
        <IconButton aria-label="delete">
          <AddCircleRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default LengthOption;
