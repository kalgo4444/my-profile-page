import { memo } from "react";
import AboutDescription from "./description/about-description";
import AboutAvatar from "./avatar/about-avatar";

const About = () => {
  return (
    <section className="mt-5" id="about">
      <div className="container">
        <div className="h-[100vh] bg-neutral-50 rounded-2xl flex flex-col items-center justify-center">
          <AboutAvatar />
          <AboutDescription />
        </div>
      </div>
    </section>
  );
};

export default memo(About);
