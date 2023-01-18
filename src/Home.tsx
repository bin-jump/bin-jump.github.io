import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();

  return (
    <div style={{ margin: 0, padding: 0, background: theme.palette.grey[50] }}>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
}
