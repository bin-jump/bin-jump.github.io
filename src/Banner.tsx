import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Banner() {
  return (
    <Grid
      container
      alignItems={"stretch"}
      style={{
        height: "calc(100vh - 50px)",
        width: "100vw",
        minHeight: 300,
        minWidth: 280,
        backgroundColor: "#0098f1",
        padding: 50,
      }}
    >
      <Grid item xs={10}>
        <div>
          <Typography
            style={{
              fontSize: 120,
              color: "white",
              fontWeight: "bold",
            }}
            //   variant="h1"
          >
            Hi, I'm Zhang
          </Typography>

          <Typography
            style={{ fontSize: 50, color: "white" }}
            variant="h2"
            gutterBottom
          >
            This is my portfolio
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
            style={{ fontSize: 20, color: "white" }}
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
