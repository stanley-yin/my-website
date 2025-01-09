import { getProjectBySlug, getProjectsData } from "@/lib/projects";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { Project } from "@/app/types";
import Image from "next/image";

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

  const { title, date, cover, description, content }: ProjectContent = project;

  return (
    <div className="wrapper py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="heading-1 mb-4">{title}</h1>
          <p className="body-text mb-2">{description}</p>
          <p className="text-gray-600">專案時間：{date}</p>
          <div className="relative my-8">
            <Image
              src={cover}
              alt={title}
              width={200}
              height={200}
              style={{
                width: "100%",
                height: "auto",
              }}
              objectFit={"contain"}
            />
          </div>
        </div>
        <Markdown className="prose">{content}</Markdown>
      </div>
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
