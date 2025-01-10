import React from "react";
import ImageCard from "@/app/components/ImageCard";
import Link from "next/link";
import { getProjectsData } from "@/lib/projects";
import CustomBreadcrumb from "@/app/components/CustomBreadcrumb";

const Page = () => {
  const crumbs = [
    { title: "home", path: "/" },
    { title: "projects", path: "/projects" },
  ];
  const data = getProjectsData();
  const projectContents = data.map((project, index) => (
    <Link
      href={`/projects/${project.slug}`}
      className="inline-block"
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
    <div className="wrapper py-6 sm:py-12">
      <CustomBreadcrumb crumbs={crumbs} />
      <h1 className="heading-1 mb-12">Projects</h1>
      <div className="grid grid-cols-1 gap-x-12 gap-y-24 lg:grid-cols-2">
        {projectContents}
      </div>
    </div>
  );
};

export default Page;
