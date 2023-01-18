import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 0,
        height: 55,
        backgroundColor: theme.palette.text.primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: 16,
          color: theme.palette.background.paper,
          mr: 2,
        }}
      >
        {"Ⓒ Zhang"}
      </Typography>
      <Link
        underline="always"
        style={{
          fontSize: 16,
          color: theme.palette.background.paper,
          textDecorationColor: theme.palette.background.paper,
        }}
        href="https://github.com/bin-jump/bin-jump.github.io/tree/main"
        target="_blank"
        rel="noreferrer"
      >
        Site Source Code
      </Link>
    </Paper>
  );
}
