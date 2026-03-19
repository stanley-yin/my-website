"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "text" }: CodeBlockProps) {
  return (
    <div className="bg-gray-300 my-6">
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{ margin: 0, borderRadius: "0.5rem", fontSize: "0.875rem" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
