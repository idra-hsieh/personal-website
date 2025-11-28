import { useDateTimeFormat } from "sanity";

export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: "Idra's Building Blog",
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published Dateg',
      options: {
        useDateTimeFormat: 'YYYY-MM-DD',
      },
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: "Slug of Idra's Building Blog",
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {type: 'block'},

        /* inline image */
        {
          type: 'image',
          options: {hotspot: true},

          fields: [
            {name: 'alt', type: 'string', title: 'Alt text'},
            {name: 'caption', type: 'string', title: 'Caption'},
          ],
        },

        /* code block */
        {type: 'code'},

        /* inline video */
        {
          type: 'file',
          name: 'video',
          title: 'Video',
          options: {
            accept: 'video/*', // only allow video files
          },
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Label / Description',
            },
            {
              name: 'poster',
              type: 'image',
              title: 'Poster image (optional)',
              options: {hotspot: true},
            },
          ],
        },

        /* divider line */
        {
          type: 'object',
          name: 'divider',
          title: 'Divider Line',
          fields: [
            // We add a fake field to make the object valid, though we won't use it.
            // Sanity objects usually require at least one field.
            {
              name: 'style',
              type: 'string',
              title: 'Style',
              initialValue: 'solid',
              options: {list: ['solid']},
              hidden: true,
            },
          ],
          preview: {prepare: () => ({title: 'Divider ───'})},
        },
      ],
    },
  ],
}