import { getPostBySlug } from "../../../../sanity/sanity.query";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Post } from "@/app/types";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { PortableText } from "@portabletext/react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = (await getPostBySlug(slug)) as Post;

  if (!post) {
    return notFound();
  }

  const { title, publishedAt, mainImage, author, body } = post;
  return (
    <div className="wrapper py-12">
      <CustomBreadcrumb
        crumbs={[
          { title: "home", path: "/" },
          { title: "posts", path: "/posts" },
          { title: title, path: `/posts/${slug}` },
        ]}
      />
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="heading-1 mb-4">{title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={author.image.image}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p>{author.name}</p>
              <p>{new Date(publishedAt).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="relative my-8 h-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src={mainImage.image}
              alt="post-cover"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="prose prose-lg">
          <PortableText value={body} />
        </div>
      </div>
    </div>
  );
}
