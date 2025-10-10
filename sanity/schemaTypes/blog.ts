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
                {
                    type: "block",
                }
            ]
        },
    ]
}