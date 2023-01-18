import Home from "./Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3C79F5",
    },
    secondary: {
      main: "#006abc",
    },
    text: {
      primary: "#333333",
      secondary: "#565656",
    },
  },
  typography: {
    fontFamily: `Hiragino Sans`,
    body2: {
      color: "#565656",
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
