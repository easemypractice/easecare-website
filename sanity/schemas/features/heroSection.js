// sanity/schemas/patientManagementBlock.js
export default {
  name: "heroSection",
  type: "object",
  title: "Hero Section",
  fields: [
    {
      name: "subtitle",
      type: "string",
      title: "Sub Title",
      description: "Sub title of the block",
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
