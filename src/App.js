import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { theme } from "./theme";
import { AppContainer } from "./components/UI/UI.styles";
import { Logo } from "./components/Logo/Logo";
import Home from "./pages/Home";
import About from "./pages/About";
import Chat from "./pages/Chat";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer>
          <Logo />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>

          {/* Header */}
          {/* Screen Content  */}
          {/* Footer */}
        </AppContainer>
      </ThemeProvider>
    </Router>
  );
}

export default App;
