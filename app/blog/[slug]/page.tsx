import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import { PortableText, type PortableTextComponents } from "next-sanity";

interface BlogData {
    currentSlug: string;
    title: string;
    content: unknown;
    titleImage?: unknown;
    publishedAt?: string;
}

// Fetch post data from Sanity
async function getData(slug: string): Promise<BlogData> {
    const query = `
    *[_type == "blog" && slug.current == $slug][0] {
      "currentSlug": slug.current,
      title,
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
                        className="rounded-lg border mx-auto"
                    />
                    {caption ? (
                        <figcaption className="mt-2 text-center text-sm text-foreground/80">
                            {caption}
                        </figcaption>
                    ) : null}
                </figure>
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
                <p className="text-base font-sans text-foreground/60 font-semibold mt-2">
                    |{" "}
                    {new Date(data.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}{" "}
                    |
                </p>
            )}

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