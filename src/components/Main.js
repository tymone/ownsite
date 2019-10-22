import React from "react";
import "../sass/style.sass";

import Projects from "./Projects.js";
import About from "./About.js";
import Cooperation from "./Cooperation.js";
import Contact from "./Contact.js";

const Main = () => (
  <main>
    <About />
    <Projects />
    <Cooperation />
    <Contact />
  </main>
);

export default Main;
