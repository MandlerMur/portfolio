import { createClient } from "next-sanity";

const client = createClient(
    {
        projectId: "auuybyy6",
        dataset: "production",
        apiVersion: "2023-01-30",
        useCdn: false
    }
);

export default client;