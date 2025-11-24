export type SanityImageRef = {
    _type: "image";
    asset: { _type: "reference"; _ref: string };
};

export interface simpleBlogCard {
    title: string;
    description: string;
    currentSlug: string;
    titleImage: SanityImageRef | null;
    publishedAt?: string;
}

export interface fullBlog {
    currentSlug: string;
    title: string;
    content: unknown;
    titleImage: SanityImageRef | null;
}