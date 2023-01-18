import Typography from "@mui/material/Typography";
import Chip, { ChipProps } from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import SectionTitle from "./components/SectionTitle";
import { styled } from "@mui/material/styles";

const SkillChip = styled(Chip)<ChipProps>(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
}));

const FRONT_END_SKILLS = ["Javascript", "Typescript", "React", "React-Redux"];
const BACK_END_SKILLS = [
  "Java",
  "Spring Boot",
  "C#",
  ".NET Core",
  "Python",
  "Django",
  "PostgreSQL",
  "Mysql",
];
const SKILL_INFO = `バックエンドに関して業務上では主にC#の技術スタックを経験していますが、少しPyhton系を触っています。また、個人でJavaの技術スタック関連を勉強しやっています。フロントエンドに関して、主にReactの技術スタックを利用しています。`;

const SkillStack = ({ title, skills }: { title: string; skills: string[] }) => {
  const theme = useTheme();

  return (
    <Container>
      <Typography
        style={{
          marginBottom: 20,
          marginTop: 16,
          fontWeight: "bold",
          color: theme.palette.primary.main,
          fontSize: 18,
        }}
        gutterBottom
      >
        {title}
      </Typography>
      <Box>
        {skills.map((item) => (
          <SkillChip sx={{ m: 1 }} key={item} label={item} />
        ))}
      </Box>
    </Container>
  );
};

export default function Skills() {
  return (
    <Container id="skills" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <Container>
        <SectionTitle title={"Skill Set"} />
        <Typography
          variant="body2"
          gutterBottom
          style={{ textAlign: "center" }}
        >
          {SKILL_INFO}
        </Typography>
      </Container>

      <Box
        sx={{ display: { sx: "block", md: "flex" }, marginTop: 10 }}
        alignItems={"center"}
      >
        <div style={{ marginRight: 40 }}>
          <SkillStack title="Front End" skills={FRONT_END_SKILLS} />
          <SkillStack title="Back End" skills={BACK_END_SKILLS} />
        </div>
        <Box
          component="img"
          sx={{
            height: 200,
            width: 250,
          }}
          alt="The house from the offer."
          src="/skill_img.jpg"
        />
      </Box>
    </Container>
  );
}
