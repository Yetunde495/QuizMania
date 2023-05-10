import React from "react";

import { Homepage } from "./pages/Homepage";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import Quiz from "./pages/Quizpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import theme from "./utils/theme";

function App() {
  const ChildComponent = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </Router>
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <ChildComponent />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
