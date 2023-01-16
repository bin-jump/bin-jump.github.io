import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Header from "./Header";
import Fooder from "./Fooder";

export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, background: "#fcfcfc" }}>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Works />
      <Fooder />
    </div>
  );
}
