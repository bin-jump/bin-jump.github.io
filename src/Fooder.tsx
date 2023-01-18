import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";

export default function Fooder() {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      style={{
        borderRadius: 0,
        height: 45,
        backgroundColor: theme.palette.text.primary,
      }}
    />
  );
}
