import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion: "2025-10-11",
    dataset: "production",
    projectId: "hnr45von",
    useCdn: false
})