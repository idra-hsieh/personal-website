"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { simpleBlogCard } from "./lib/interface";
import { urlFor } from "./lib/sanity";

type BlogGridProps = {
  posts: simpleBlogCard[];
};

const BlogGrid = ({ posts }: BlogGridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 1.4, duration: 0.5, ease: "easeOut" },
      }}
      className="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5 px-10 lg:px-0"
    >
      {posts.map((post) => (
        <Card key={post.currentSlug}>
          <div className="relative w-full h-56 overflow-hidden rounded-t-lg">
            {post.titleImage && (
              <Image
                src={urlFor(post.titleImage).url()}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            )}
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
    </motion.div>
  );
};

export default BlogGrid;

