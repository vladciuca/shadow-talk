import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { theme } from "./theme";
import { Container } from "./components/UI/UI.styles";
import { Logo } from "./components/Logo/Logo";
import { Screen } from "./components/Screen/Screen";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Logo />
        <Screen />
      </Container>
    </ThemeProvider>
  );
}

export default App;
