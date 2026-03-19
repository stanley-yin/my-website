export interface Project {
  _id: string;
  slug: {
    current: string;
  };
  title: string;
  description: string;
  cover: string;
  coverLqip?: string;
  date: string;
  priority?: number;
  body?: (PortableTextBlock | PortableTextImage)[];
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
    lqip?: string;
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
