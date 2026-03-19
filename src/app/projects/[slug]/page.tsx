import { getAllProjects, getProjectBySlug } from "../../../../sanity/sanity.query";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Project } from "@/app/types";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { PortableText } from "@portabletext/react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = (await getProjectBySlug(slug)) as Project;

  if (!project) {
    return notFound();
  }

  const { title, date, cover, coverLqip, description, body } = project;

  return (
    <div className="wrapper py-12">
      <CustomBreadcrumb
        crumbs={[
          { title: "home", path: "/" },
          { title: "projects", path: "/projects" },
          { title: title, path: `/projects/${slug}` },
        ]}
      />
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="heading-1 mb-4">{title}</h1>
          <p className="body-text mb-2">{description}</p>
          <p className="text-gray-600">專案時間：{date}</p>
          <div className="relative my-8 aspect-video w-full bg-gray-100">
            <Image
              src={cover}
              alt={title}
              fill
              className="object-contain"
              placeholder={coverLqip ? "blur" : "empty"}
              blurDataURL={coverLqip}
            />
          </div>
        </div>
        <div className="prose prose-lg">
          <PortableText value={body ?? []} />
        </div>
      </div>
    </div>
  );
}

// 在 build time 時會先 render 這些頁面
export async function generateStaticParams() {
  const projects = (await getAllProjects()) as Project[];
  return projects.map((project) => ({
    slug: project.slug.current,
  }));
}
