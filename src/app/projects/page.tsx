import React from "react";
import ImageCard from "@/components/ImageCard";
import Link from "next/link";
import { getAllProjects } from "../../../sanity/sanity.query";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { Project } from "@/app/types";

const Page = async () => {
  const crumbs = [
    { title: "home", path: "/" },
    { title: "projects", path: "/projects" },
  ];

  const projects = (await getAllProjects()) as Project[];

  const projectContents = projects.map((project) => (
    <Link
      href={`/projects/${project.slug.current}`}
      className="inline-block"
      key={project._id}
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
