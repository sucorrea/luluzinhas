import ListaAniversariantes from "./ListaAniversariantes";
import { createTheme, ThemeProvider } from "@mui/material";

import "./index.css";

const theme = createTheme({
  typography: { fontFamily: ["Rubik", "sans-serif"].join(",") },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <ListaAniversariantes />
  </ThemeProvider>
);

export default App;
