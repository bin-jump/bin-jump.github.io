import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

export default function Banner() {
  const theme = useTheme();

  return (
    <Grid
      container
      alignItems={"stretch"}
      style={{
        height: "calc(100vh - 50px)",
        width: "100vw",
        minHeight: 300,
        minWidth: 280,
        backgroundColor: theme.palette.primary.main,
        padding: 50,
      }}
    >
      <Grid item xs={10}>
        <div>
          <Typography
            sx={{
              fontSize: { xs: 80, md: 120 },
              color: theme.palette.background.paper,
              fontWeight: "bold",
            }}
          >
            Hi, I'm Zhang
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 40, md: 50 },
              color: theme.palette.background.paper,
            }}
            gutterBottom
          >
            Welcome to my portfolio
          </Typography>
        </div>
      </Grid>

      <Grid item xs={true}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "flex-end",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 16, md: 20 },
              color: theme.palette.background.paper,
            }}
            variant="h4"
            gutterBottom
          >
            {"スクロール↓"}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
