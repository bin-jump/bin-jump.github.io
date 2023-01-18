import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material/styles";
import SectionTitle from "./components/SectionTitle";

const BASIC_INFO = `コンピューターハードウェア関連の修士を終了後、メーカーに入りソフトウェアエンジニアとして働いています。主にウェブアプリケーションを開発しており、バックエンドとフロントエンド両方経験しています。システムのアーキテクチャー設計もやっており、ドメイン駆動設計を実践しています。`;

export default function About() {
  const theme = useTheme();

  return (
    <div id="about" style={{ minHeight: 400, padding: 80 }}>
      <SectionTitle title={"About"} />

      <Grid container alignItems={"stretch"} columns={{ xs: 6, md: 12 }}>
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
            sx={{ height: "100%", paddingRight: { xs: 0, md: 10 } }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <div>
              <Typography
                style={{
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                }}
                variant="h6"
                gutterBottom
              >
                Zhang
              </Typography>
              <Typography variant="body2" gutterBottom>
                {BASIC_INFO}
              </Typography>

              <IconButton
                href="https://github.com/bin-jump"
                target="_blank"
                rel="noopener"
                aria-label="my-github"
              >
                <GitHubIcon
                  sx={{ color: theme.palette.text.secondary, fontSize: 20 }}
                />
              </IconButton>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
