import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

async function getData() {
    const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
        title,
            description,
            "currentSlug": slug.current,
            titleImage,
            publishedAt,
    }`;

    const data = await client.fetch(query);

    return data;
}

export default async function Home() {
    const data: simpleBlogCard[] = await getData();

    console.log(data);
    return (
      <div className="container m-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5 px-10 lg:px-0">
            {data.map((post, idx) => (
              <Card key={idx}>
                <div className="relative w-full h-56 overflow-hidden rounded-t-lg">
                  <Image
                    src={urlFor(post.titleImage).url()}
                    alt="image"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="mt-3 font-sans">
                  {post.publishedAt && (
                    <p className="text-sm text-foreground/60 font-semibold mb-3">
                      {new Date(post.publishedAt)
                        .toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })
                        .replace(/ (\d{4})$/, ", $1")}
                    </p>
                  )}
                  <h3 className="text-lg line-clamp-2 font-bold text-foreground leading-relaxed">
                    {post.title}
                  </h3>
                  <p className="line-clamp-2 text-sm mt-2 text-foreground/80 leading-relaxed">
                    {post.description}
                  </p>
                  <Button asChild className="w-full mt-7">
                    <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
}