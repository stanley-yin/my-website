import React from "react";
import ImageCard from "@/app/components/ImageCard";
import Link from "next/link";
import { getProjectsData } from "@/lib/projects";

const Page = () => {
  const data = getProjectsData();
  const projectContents = data.map((project, index) => (
    <Link
      href={"/projects/crm-project"}
      className="mx-auto inline-block"
      key={index}
    >
      <ImageCard
        img={project.cover}
        imgAlt={project.title}
        title={project.title}
        description={project.description}
        createdAt={project.date}
      />
    </Link>
  ));
  return (
    <div className="wrapper py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2">{projectContents}</div>
    </div>
  );
};

export default Page;
