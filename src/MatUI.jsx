import "./styles.css";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";

export default function MatUI() {
  return (
    <div>
      <Button />
      <Checkbox />
      <Fab color="success" aria-label="add">
        <AddIcon />
      </Fab>
      <Typography component="legend">Controlled</Typography>
      <Rating name="simple-controlled" />
      <Select>
        <MenuItem value={10}>Good</MenuItem>
        <MenuItem value={20}>OK</MenuItem>
        <MenuItem value={30}>Bad</MenuItem>
      </Select>
      <Box sx={{ width: 400, height: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="Volume" />
          <VolumeUp />
        </Stack>
      </Box>
      <Switch defaultChecked />
      <TextField id="outlined-basic" label="Type In Me" variant="outlined" />
    </div>
  );
}
