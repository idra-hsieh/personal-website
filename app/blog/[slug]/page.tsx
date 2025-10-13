import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import { PortableText, PortableTextComponents } from "next-sanity";

async function getData(slug: string) {
    const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
            title,
            content,
            titleImage,
            publishedAt,
    }[0]`;

    const data = await client.fetch(query);
    return data;
}

const ptComponents: PortableTextComponents = {

    // inline images
    types: {
        image: ({ value }) => {

            // guard: some inline images may be unset or missing in asset
            if (!value?.asset?._ref) return null;

            const src = urlFor(value).width(1200).url();
            const alt = value.alt || "Blog Image";
            const caption = value.caption;

            return (
                <figure className="my-8">
                    <img src={src} alt={alt} className="rounded-lg border mx-auto" />
                    {caption ? (
                        <figcaption className="mt-2 text-center text-sm text-foreground/80">
                            {caption}
                        </figcaption>
                    ) : null}
                </figure>
            );
        },
    },

    // paragraph divider
    block: {
        h2: ({ children }) => (
            <div className="my-12 w-full">
                <hr className="w-full h-[1px] bg-foreground/40 border-0 mb-16" />
                <h2 className="text-3xl font-bold text-foreground leading-snug">
                    {children}
                </h2>
            </div>
        ),
    }
};



export default async function BlogArticle({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug)

    console.log(data);

    return (
        <div className="mt-2 flex flex-col items-center px-10 lg:px-0">

            {/* title */}
            <h1 className="text-center">
                {/* <span className="block text-base text-foreground/80 font-semibold tracking-wide uppercase">
                    ꧁ ༺  Idra's Building Blog  ༻ ꧂
                </span> */}
                <span className="mt-1 mb-3 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl max-w-[800px] leading-relaxed">
                    {data.title}
                </span>
            </h1>

            {/* published date */}
            {data.publishedAt && (
                <p className="text-base font-sans text-foreground/60 font-semibold mt-2">
                    ｜ {new Date(data.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })} ｜
                </p>
            )}

            {/* title image */}
            <Image
                src={urlFor(data.titleImage).url()}
                width={800}
                height={800}
                alt="personal website project"
                priority
                className="rounded-lg mt-8 border border-foreground/20"
            />

            <div className="mt-16 prose prose-beige prose-lg font-sans">
                <PortableText value={data.content} components={ptComponents} />
            </div>
        </div>
    )
}