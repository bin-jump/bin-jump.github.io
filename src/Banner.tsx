import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/material";

export default function Banner() {
  const theme = useTheme();

  return (
    <Grid
      container
      alignItems={"stretch"}
      style={{
        height: "calc(100vh - 50px)",
        width: "100%",
        minHeight: 400,
        minWidth: 280,
        backgroundColor: theme.palette.primary.main,
        paddingBottom: 20,
      }}
      sx={{
        padding: { xs: 1, md: 6 },
      }}
    >
      <Grid item xs={9} md={10}>
        <Container sx={{ paddingLeft: { xs: 3, md: 0 } }}>
          <Typography
            sx={{
              fontSize: { xs: 80, md: 100, lg: 120 },
              color: theme.palette.background.paper,
              fontWeight: "bold",
            }}
          >
            Hi, I'm Zhang
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 32, md: 46, lg: 50 },
              color: theme.palette.background.paper,
            }}
            gutterBottom
          >
            Welcome to my portfolio
          </Typography>
        </Container>
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
              textAlign: "center",
            }}
            gutterBottom
          >
            {"スクロール↓"}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
