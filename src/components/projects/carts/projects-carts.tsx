import { memo } from "react";
import { PROJECTS_CARDS } from "../../../static/projects.card";
import { Card, Heading, Link, Text } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";

const ProjectsCarts = () => {
  const { i18n } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {PROJECTS_CARDS.map((project: any) => (
        <Card key={project.id}>
          <Heading my={"2"} size={"3"}>
            {project.title[i18n.language]}
          </Heading>
          <Text mb={"6"}>{project.description[i18n.language]}</Text>
          <div className="flex items-center gap-x-4 my-2">
            <Link weight={"bold"} target="_blank" href={project.github}>
              GitHub
            </Link>
            <Link
              color="blue"
              target="_blank"
              weight={"bold"}
              href={project.demo}
            >
              Demo
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default memo(ProjectsCarts);
