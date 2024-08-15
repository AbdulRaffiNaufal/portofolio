import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from './utils/Theme';
import { MainBody, Container} from "./styles/Global.styled";

// import components
import Showcase  from "./components/Showcase";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Container>
          <Navbar />
          <Showcase />
          <MySkills />
          <MyProjects />
          <Footer />
        </Container>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
