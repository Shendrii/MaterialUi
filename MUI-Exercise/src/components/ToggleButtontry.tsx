import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import { TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
interface Props {
  format: string | null;
  handleFormat: string;
}

const ToggleButtontry = ({ format, handleFormat }: Props) => {
  return (
    <div>
      <ToggleButtonGroup
        onChange={handleFormat}
        value={format}
        color="success"
        exclusive
      >
        <ToggleButton value={"underlined"}>
          <FormatUnderlined />
        </ToggleButton>
        <ToggleButton value={"italic"}>
          <FormatItalic />
        </ToggleButton>
        <ToggleButton value={"bold"}>
          <FormatBold />
        </ToggleButton>
      </ToggleButtonGroup>

      <TextField label="Username" variant="filled" required type="read" />
    </div>
  );
};

export default ToggleButtontry;
