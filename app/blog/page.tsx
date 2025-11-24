import { simpleBlogCard } from "./lib/interface";
import { client } from "./lib/sanity";
import BlogGrid from "./BlogGrid";

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

  return (
    <div className="container m-auto">
      <div className="flex flex-col lg:flex-row lg:gap-[30px]">
        <BlogGrid posts={data} />
      </div>
    </div>
  );
}
