import AppRouter from "./router/AppRouter";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/globalStyles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
