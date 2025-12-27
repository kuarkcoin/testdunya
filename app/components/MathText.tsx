"use client";

import React from "react";
import { InlineMath, BlockMath } from "react-katex";

function splitByMath(text: string) {
  const regex = /(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$)/g;
  return text.split(regex).filter(Boolean);
}

export default function MathText({ text }: { text: string }) {
  const parts = splitByMath(text);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("$$") && part.endsWith("$$")) {
          return <BlockMath key={i} math={part.slice(2, -2).trim()} />;
        }
        if (part.startsWith("$") && part.endsWith("$")) {
          return <InlineMath key={i} math={part.slice(1, -1).trim()} />;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
