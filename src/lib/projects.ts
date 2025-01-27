import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Project } from "@/app/types";

const projectDirectory = path.join(process.cwd(), "/src/content/projects");

export function getProjectsData() {
  const fileNames = fs.readdirSync(projectDirectory);
  const allProjectsData: Project[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(projectDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the metadata section
    const matterResult = matter(fileContents);
    const data = matterResult.data;
    // Combine the data with the id
    return {
      slug,
      title: data.title,
      description: data.description,
      cover: data.cover,
      date: data.date,
      ...data,
    };
  });
  return allProjectsData;
}

export async function getProjectBySlug(slug: string) {
  const filePath = path.join(projectDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    description: data.description,
    cover: data.cover,
    date: data.date,
    contentHtml,
    content,
  };
}
