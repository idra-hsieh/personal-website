import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    apiVersion: "2025-10-11",
    dataset: "production",
    projectId: "hnr45von",
    useCdn: false
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source);
}