export default {
    name: "blog",
    type: "document",
    title: "Blog",
    fields: [
        {
            name: "title",
            type: "string",
            tytle: "Idra's Building Blog"
        },
        {
            name: "slug",
            type: "slug",
            tytle: "Slug of Idra's Building Blog",
        },
        {
            name: "titleImage",
            type: "image",
            tytle: "Title Image",
        },
        {
            name: "description",
            type: "text",
            tytle: "Description",
        },
        {
            name: "content",
            type: "array",
            tytle: "Content",
            of: [
                {
                    type: "block",
                }
            ]
        },
    ]
}