import { getProjectBySlug, getProjectsData } from "@/lib/projects";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const slug = (await params).slug;
  const project = await getProjectBySlug(slug);
  if (!project) {
    return notFound();
  }

  return (
    <div>
      My Post: {slug}
      <Markdown>{project.content}</Markdown>
    </div>
  );
}

// 在 build time 時會先 render 這些頁面
export async function generateStaticParams() {
  const projectData = getProjectsData();
  return projectData.map((project) => {
    return {
      slug: project.id,
    };
  });
}
