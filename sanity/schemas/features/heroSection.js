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
      type: "string",
      title: "Title",
      description: "Main title of the block",
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
