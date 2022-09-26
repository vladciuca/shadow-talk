import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./Store";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { theme } from "./theme";
import { AppContainer } from "./components/UI/UI.styles";
import { AppInfo, AppFeedback, Logo } from "components";
import { Home, About, NewChat, Chat, Error } from "pages";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Store>
          <AppContainer>
            <AppInfo />
            <AppFeedback />
            <Logo />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/new-chat" element={<NewChat />} />
              <Route path="/chat/:id" element={<Chat />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </AppContainer>
        </Store>
      </ThemeProvider>
    </Router>
  );
}

export default App;
