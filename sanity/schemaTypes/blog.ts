export default {
    name: "blog",
    type: "document",
    title: "Blog",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Idra's Building Blog"
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug of Idra's Building Blog",
            options: {
                source: "title",
            }
        },
        {
            name: "titleImage",
            type: "image",
            title: "Title Image",
        },
        {
            name: "description",
            type: "text",
            title: "Description",
        },
        {
            name: "content",
            type: "array",
            title: "Content",
            of: [
                { type: "block", },

                /* inline image */
                {
                    type: "image",
                    options: { hotspot: true },

                    fields: [
                        { name: "alt", type: "string", title: "Alt text" },
                        { name: "caption", type: "string", title: "Caption" },
                    ]
                },

                /* divider line
                {
                    type: "object",
                    name: "divider",
                    title: "Divider Line",
                    fields: [],
                    preview: { prepare: () => ({ title: "Divider" }) },
                },
                */
            ]
        },
    ]
}