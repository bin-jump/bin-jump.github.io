import Home from "./Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0098f1",
    },
    secondary: {
      main: "#006abc",
    },
  },
});

function App() {
  return (
    <div className="App">
      <nav>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </nav>
    </div>
  );
}

export default App;
