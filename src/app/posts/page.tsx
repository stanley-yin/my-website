import React from "react";
import ImageCard from "@/components/ImageCard";
import Link from "next/link";
import { getAllPosts } from "../../../sanity/sanity.query";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { Post } from "@/app/types";

const Page = async () => {
  const crumbs = [
    { title: "home", path: "/" },
    { title: "posts", path: "/posts" },
  ];

  const posts = (await getAllPosts()) as Post[];

  const postContents = posts.map((post) => {
    return (
      <Link
        href={`/posts/${post.slug.current}`}
        className="inline-block"
        key={post._id}
      >
        <ImageCard
          img={post.mainImage.image}
          imgAlt={"post-cover"}
          title={post.title}
          createdAt={new Date(post.publishedAt).toLocaleDateString()}
        />
      </Link>
    );
  });

  return (
    <div className="wrapper py-6 sm:py-12">
      <CustomBreadcrumb crumbs={crumbs} />
      <h1 className="heading-1 mb-12">Posts</h1>
      <div className="grid grid-cols-1 gap-x-12 gap-y-24 lg:grid-cols-2">
        {postContents}
      </div>
    </div>
  );
};

export default Page;
