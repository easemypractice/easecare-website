// sanity/schemas/patientManagementBlock.js
export default {
  name: "heroSection",
  type: "object",
  title: "Hero Section",
  fields: [
    {
      name: "subTitle",
      title: "SubTitle",
      type: "string",
    },
    {
      name: "title",
      type: "array",
      title: "Title",
      description: "Main title of the block",
      of: [
        {
          type: "block",
          marks: {
            annotations: [{ name: "color", title: "Color", type: "color" }],
          },
        },
      ],
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Description text of the block",
    },
    {
      name: "image",
      type: "image",
      title: "Background Image",
      options: {
        hotspot: true,
      },
    },
  ],
};
