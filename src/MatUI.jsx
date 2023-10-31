import "./styles.css";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export default function MatUI() {
  return (
    <div>
      <Button />
      <Checkbox />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Typography component="legend">Controlled</Typography>
      <Rating name="simple-controlled" />
      <Select>
        <MenuItem value={10}>Good</MenuItem>
        <MenuItem value={20}>OK</MenuItem>
        <MenuItem value={30}>Bad</MenuItem>
      </Select>
    </div>
  );
}
