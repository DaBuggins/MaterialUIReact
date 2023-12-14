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
import ToggleButtons from "./ToggleGroup";
import Avatar from "@mui/material/Avatar";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";
import Snackbar from "./Snackbar";

export default function MatUI() {
  return (
    <div>     
      <Box sx={{ width: 400, height: 200 }}>
        <Button />
        <Checkbox />
        <Fab color="success" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
       <Snackbar />
      <Box>
        <Typography component="legend">Controlled</Typography>
        <Rating name="simple-controlled" />
        <Select>
          <MenuItem value={10}>Good</MenuItem>
          <MenuItem value={20}>OK</MenuItem>
          <MenuItem value={30}>Bad</MenuItem>
        </Select>
      </Box>
      <Box sx={{ width: 400, height: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="Volume" />
          <VolumeUp />
        </Stack>
      </Box>
      <Switch defaultChecked />
      <TextField id="outlined-basic" label="Type In Me" variant="outlined" />
      <Box>
        <ToggleButtons />
      </Box>
      <Avatar sx={{ bgcolor: "orange" }}>N</Avatar>
      <Badge badgeContent={4} color="secondary">
        <MailIcon color="action" />
      </Badge>
      <Stack>
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    </div>
  );
}
