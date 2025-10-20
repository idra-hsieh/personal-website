import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageRef } from "./interface";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hnr45von";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-10-11";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageRef | unknown) {
    return builder.image(source as SanityImageRef);
}