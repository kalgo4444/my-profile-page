import { memo } from "react";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import About from "../../components/about/about";
import Projects from "../../components/projects/projects";
import Contact from '../../components/contact/contact'

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact/>
      </main>
    </>
  );
};

export default memo(HomePage);
