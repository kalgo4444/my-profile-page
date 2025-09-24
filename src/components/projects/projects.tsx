import { memo } from "react";
import ProjectsCarts from "./carts/projects-carts";

const Projects = () => {
  return (
    <section className="mt-5" id="projects">
      <div className="container">
        <div className="min-h-[100vh] bg-neutral-50 rounded-2xl flex flex-col items-center justify-center p-5 md:p-10">
          <ProjectsCarts />
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);
