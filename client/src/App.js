import React from 'react';
import './App.css';
import HOME from "./component/Home/home";
import AboutMe from"./component/AboutMe/about-me";
import Skills from"./component/Skills/skills";
import Services from "./component/Services/Services";
import Works from"./component/Works/works";
import ContactUs from "./component/contactUs/contact";
import ScrollTop from "./component/scrolTop/scrolTop";
import Qualitification from "./component/qualification/qualification"
import Theme from"./component/theme/theme";
function App() {
  return (
    <div className="App">
      <HOME/>
      <AboutMe/>
      <Skills/>
      <Services/>
      <Qualitification/>
      <Works/>
      <ContactUs/> 
      <ScrollTop/>
      <Theme/>
    </div>
  );
}

export default App;
