import { getProjectBySlug, getProjectsData } from "@/lib/projects";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { Project } from "@/app/types";

type PageProps = {
  params: Promise<{ slug: string }>;
};

interface ProjectContent extends Project {
  contentHtml: string;
  content: string;
  slug: string;
}

export default async function Page({ params }: PageProps) {
  const slug = (await params).slug;
  const project = await getProjectBySlug(slug);
  if (!project) {
    return notFound();
  }

  const { title, date, description, content }: ProjectContent = project;

  return (
    <div className="wrapper py-12">
      <div className="mb-8">
        <h1 className="heading-1">{title}</h1>
        <p className="body-text">{description}</p>
        <p>{date}</p>
      </div>
      <Markdown>{content}</Markdown>
    </div>
  );
}

// 在 build time 時會先 render 這些頁面
export async function generateStaticParams() {
  const projectData = getProjectsData();
  return projectData.map((project) => {
    return {
      slug: project.slug,
    };
  });
}
