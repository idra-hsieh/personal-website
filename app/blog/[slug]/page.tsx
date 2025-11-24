import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import {
  PortableText,
  PortableTextBlock,
  type PortableTextComponents,
} from "next-sanity";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { SanityImageRef } from "../lib/interface";

interface BlogData {
  currentSlug: string;
  title: string;
  description: string;
  content: PortableTextBlock[];
  titleImage?: SanityImageRef | null;
  publishedAt?: string;
}

interface CodeBlockProps {
  value: {
    code: string;
    language: string;
    filename?: string;
  };
}

// Fetch post data from Sanity
async function getData(slug: string): Promise<BlogData> {
  const query = `
    *[_type == "blog" && slug.current == $slug][0] {
      "currentSlug": slug.current,
      title,
      description,
      content,
      titleImage,
      publishedAt
    }
  `;
  const data = await client.fetch<BlogData>(query, { slug });
  return data;
}

// Custom PortableText components for rich text rendering
const ptComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const src = urlFor(value).width(1200).url();
      const alt = value.alt || "Blog Image";
      const caption = value.caption;

      return (
        <figure className="my-8">
          <Image
            src={src}
            alt={alt}
            width={800}
            height={500}
            className="w-full h-[250px] object-cover rounded-lg border mx-auto"
          />
          {caption ? (
            <figcaption className="mt-2 text-center text-sm text-foreground/80">
              {caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },

    divider: () => {
      return <hr className="w-full h-[1px] bg-foreground/20 border-0 my-12" />;
    },

    code: ({ value }: CodeBlockProps) => {
      return (
        <div className="my-8 relative rounded-lg overflow-hidden bg-[#1e1e1e]">
          {value.filename && (
            <div className="px-4 py-2 bg-[#2d2d2d] text-xs text-gray-400 font-mono border-b border-gray-700">
              {value.filename}
            </div>
          )}
          <SyntaxHighlighter
            language={value.language || "text"}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              fontSize: "0.9rem",
              lineHeight: "1.5",
            }}
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <div className="my-12 w-full">
        <hr className="w-full h-[1px] bg-foreground/40 border-0 mb-16" />
        <h2 className="text-3xl font-bold text-foreground leading-snug">
          {children}
        </h2>
      </div>
    ),
  },
};

// Explicitly satisfy Next.js Page type to avoid the Promise<any> constraint issue
const BlogArticle = (async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);

  return (
    <div className="mt-2 flex flex-col items-center px-10 lg:px-0">
      {/* Title */}
      <h1 className="text-center">
        <span className="mt-1 mb-3 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl max-w-[800px] leading-relaxed">
          {data.title}
        </span>
      </h1>

      {/* Published date */}
      {data.publishedAt && (
        <p className="text-sm font-sans text-foreground/60 font-semibold mt-2">
          |{" "}
          {new Date(data.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          |
        </p>
      )}

      {/* Description */}
      <h2 className="text-center">
        <span className="italic text-md text-foreground/80 leading-8 leading-relaxed block mx-auto max-w-[600px] mt-6 mb-2">
          {data.description}
        </span>
      </h2>

      {/* Title image */}
      {data.titleImage && (
        <Image
          src={urlFor(data.titleImage).url()}
          width={800}
          height={800}
          alt="personal website project"
          priority
          className="rounded-lg mt-8 border border-foreground/20"
        />
      )}

      {/* Main content */}
      <div className="mt-16 prose prose-beige prose-lg font-sans">
        <PortableText value={data.content} components={ptComponents} />
      </div>
    </div>
  );
}) satisfies (props: { params: { slug: string } }) => Promise<JSX.Element>;

export default BlogArticle;