import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getAllPosts() {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      title,
      slug,
      publishedAt,
      mainImage { alt, "image": asset->url },
      "author": author-> {
        name,
        image { alt, "image": asset->url },
      },
      body[] {
        ...,
        _type == "image" => {
          "url": asset->url,
           alt
        }
      }
    }`,
  );
}
