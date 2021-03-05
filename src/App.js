import React from 'react';
import HomeFrame from './frames/home-frame/home-frame.js';
import AboutFrame from './frames/about-frame/about-frame.js';
import ExperiencesFrame from './frames/experiences-frame/experiences-frame.js';
import ProjectsFrame from './frames/projects-frame/projects-frame.js';
import ContactFrame from './frames/contact-frame/contact-frame.js';
import NavigationBar from './frames/navigation-bar/navigation-bar.js';
import "./App.css";

function App() {
  return(
    <div>
      <NavigationBar />
      <HomeFrame />
      <AboutFrame />
      <ExperiencesFrame />
      <ProjectsFrame />
      <ContactFrame />
    </div>
  );
}

export default App;