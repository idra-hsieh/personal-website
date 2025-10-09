import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "m0pg3g08",
    dataset: "blog",
    apiVersion: "2024-01-01",
    useCdn: false,
});