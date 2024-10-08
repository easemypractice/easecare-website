import { defineField } from "sanity";
import { IdHeading } from "./features/blockContent";

export default {
  name: "clarityGuide",
  type: "document",
  title: "Clarity Guide",
  fields: [
    // defineField({
    //   name: "type",
    //   title: "Type",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "Blog", value: "blog" },
    //       { title: "Editorial", value: "editorial" },
    //     ],
    //     layout: "radio",
    //   },
    //   initialValue: "blog",
    // }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      // validation: (Rule) => Rule.required().max(70).warning(`A title shouldn't be more than 120 characters.`),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug of your blog article",
      options: {
        source: "title",
      },
    }),
    // defineField({
    //   name: "titleImage",
    //   type: "image",
    //   title: "Title Image",
    //   options: {
    //     hotspot: true, // <-- Defaults to false
    //   },
    //   fields: [
    //     {
    //       name: "caption",
    //       type: "string",
    //       title: "Caption",
    //     },
    //     {
    //       name: "attribution",
    //       type: "string",
    //       title: "Attribution",
    //     },
    //   ],
    // }),

    // defineField({
    //   name: "smallDescription",
    //   type: "text",
    //   title: "Small Description",
    // }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
              {
                title: "Strong",
                value: "strongText",
                blockEditor: {
                  icon: () => "B-id",
                  render: IdHeading,
                },
              },
            ],
          },
        },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description:
                "some of your visitors cannot see images,be they blind,color-blind,low-sighted",
              option: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    }),
    // defineField({
    //   name: "author",
    //   type: "object",
    //   fields: [
    //     {
    //       title: "Author",
    //       name: "author",
    //       type: "reference",
    //       to: [{ type: "author" }],
    //     },
    //   ],
    // }),
    // defineField({
    //   title: "Created At",
    //   name: "createdAt",
    //   type: "datetime",
    //   options: {
    //     dateFormat: "YYYY-MM-DD",
    //     timeFormat: "HH:mm",
    //     timeStep: 5,
    //     calendarTodayLabel: "Today",
    //   },
    // }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
};
