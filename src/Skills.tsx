import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

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

const SkillStack = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div>
      <Typography
        style={{ marginBottom: 20, marginTop: 16, fontWeight: "bold" }}
        variant="subtitle1"
        gutterBottom
      >
        {title}
      </Typography>
      <Box>
        {skills.map((item) => (
          <Chip sx={{ m: 1 }} key={item} label={item} />
        ))}
      </Box>
    </div>
  );
};

export default function Skills() {
  return (
    <div id="skills" style={{ padding: 80 }}>
      <div style={{ paddingLeft: 100, paddingRight: 100, marginBottom: 60 }}>
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
          Skill Set
        </Typography>
        <Typography variant="body2" gutterBottom>
          バックエンドに関して業務上では主にC#の技術スタックを経験していますが、少しPyhton系を触っています。また、個人でJavaの技術スタック関連を勉強しやっています。フロントエンドに関して、主にReactの技術スタックを利用しています。
        </Typography>
      </div>

      <Box sx={{ display: "flex" }} alignItems={"center"}>
        <div style={{ marginRight: 40 }}>
          <SkillStack title="Front End" skills={FRONT_END_SKILLS} />
          <SkillStack title="Back End" skills={BACK_END_SKILLS} />
        </div>
        <Box
          component="img"
          sx={{
            height: 200,
            width: 250,
            // maxHeight: { xs: 233, md: 167 },
            // maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src="/skill_img.jpg"
        />
      </Box>
    </div>
  );
}
