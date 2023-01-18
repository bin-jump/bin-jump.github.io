import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: 34,
  fontWeight: "bold",
  color: theme.palette.text.primary,
  textAlign: "center",
}));

export default function SectionTitle({ title }: { title: string }) {
  const theme = useTheme();

  return (
    <div style={{ marginBottom: 80 }}>
      <Title>{title}</Title>

      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: 60,
          borderBottom: `5px solid ${theme.palette.primary.main}`,
          borderRadius: 6,
        }}
      />
    </div>
  );
}
