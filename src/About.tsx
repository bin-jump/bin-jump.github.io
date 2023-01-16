import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function About() {
  return (
    <div id="about" style={{ minHeight: 400, padding: 80 }}>
      <Typography
        style={{
          fontSize: 34,
          fontWeight: "bold",
          color: "#333333",
          textAlign: "center",
          marginBottom: 80,
        }}
        variant="h2"
        gutterBottom
      >
        About
      </Typography>

      <Grid container alignItems={"stretch"}>
        <Grid item xs={6}>
          <Box
            style={{ height: "100%" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              sx={{ width: 180, height: 180 }}
              alt="Zhang"
              src="/cat.jpg"
            />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box
            style={{ height: "100%", paddingRight: 100 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <div>
              <Typography
                style={{ fontSize: 28, fontWeight: "bold", color: "#006abc" }}
                variant="h2"
                gutterBottom
              >
                Zhang
              </Typography>
              <Typography variant="body1" gutterBottom>
                コンピューターハードウェア関連の修士を終了後、メーカーに入りソフトウェアエンジニアとして働いています。主にウェブアプリケーションを開発しており、バックエンドとフロントエンド両方経験しています。システムのアーキテクチャー設計もやっており、ドメイン駆動設計を実践しています。
              </Typography>

              <IconButton
                href="https://github.com/bin-jump"
                target="_blank"
                aria-label="my-github"
              >
                <GitHubIcon sx={{ color: "#333333", fontSize: 20 }} />
              </IconButton>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
