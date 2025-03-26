export interface Project {
  slug: string;
  title: string;
  description: string;
  cover: string;
  date: string;
}

interface PortableTextImage {
  _type: "image";
  url: string;
  alt: string;
}

interface PortableTextMark {
  _type: "link";
  href: string;
}

export interface PortableTextBlock {
  _type: "block";
  children: {
    _type: "span";
    text: string;
  }[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  markDefs: PortableTextMark[];
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  mainImage: {
    alt: string;
    image: string;
  };
  author: {
    name: string;
    image: {
      alt: string;
      image: string;
    };
  };
  body: (PortableTextBlock | PortableTextImage)[];
}
