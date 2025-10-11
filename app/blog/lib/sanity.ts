import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion: "2025-10-11",
    dataset: "prodduction",
    projectId: "hnr45von",
    useCdn: false
})