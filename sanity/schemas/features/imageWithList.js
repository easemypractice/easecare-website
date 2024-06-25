export default {
  name: "imageWithList",
  type: "object",
  title: "Image with list",
  fields: [
    {
      name: "title",
      type: "array",
      title: "Title",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "CardImageandList",
      type: "array",
      title: "Contant",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
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
    },
  ],
};
