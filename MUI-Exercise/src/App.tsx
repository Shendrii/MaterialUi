import { ChangeEventHandler, useState } from "react";

import "./App.css";
import Button from "@mui/material/Button";
import {
  AppBar,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Book } from "@mui/icons-material";

import ToggleButtontry from "./components/ToggleButtontry";
import CardTry from "./components/CardTry";
import CustomizedSwitches from "./components/CustomizedSwitches";
import ControlledAccordions from "./components/ControlledAccordions";

function App() {
  const [format, setFormat] = useState<string | null>("");
  console.log({ format });

  const handleFormat = (
    e: ChangeEventHandler<HTMLButtonElement>,
    updatedFormat: string
  ) => {
    setFormat(updatedFormat);
  };

  return (
    <div className="App">
      <AppBar color="success">
        <Toolbar>
          <IconButton size="large">
            <Book />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            NavBar and Buttons
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" variant="text">
              Text
            </Button>
            <Button variant="contained">Contained</Button>
            <Button color="inherit" variant="outlined">
              Outlined
            </Button>
            <Button variant="contained" disabled>
              Disabled
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Stack spacing={2}>
        <Stack direction="row" spacing={2}></Stack>

        <Stack direction="row">
          <Typography variant="h1">CARD</Typography>
        </Stack>

        <Stack direction="row" sx={{ border: 3 }}>
          <CardTry />
          <CardTry />
          <CardTry />
          <CardTry />
          <CardTry />
          <CardTry />
        </Stack>
        <Stack direction="row"></Stack>
        <Stack direction="row">
          <Typography variant="h1">TextFields and ToggleButtons</Typography>
        </Stack>
        <Stack direction="row">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Stack>
      </Stack>

      <Stack direction="row">
        {" "}
        <ToggleButtontry handleFormat={handleFormat} format={format} />
      </Stack>
      <Stack direction="row">
        <Typography variant="h1">Switches</Typography>
      </Stack>

      <Stack sx={{ border: 3 }} direction="row">
        <CustomizedSwitches />
      </Stack>
      <Stack direction="row">
        <Typography variant="h1">Accordions</Typography>
      </Stack>
      <Stack direction="row">
        <ControlledAccordions />
      </Stack>
    </div>
  );
}

export default App;
