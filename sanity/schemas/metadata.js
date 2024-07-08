export default {
  name: "metadata",
  type: "object",
  title: "Meta Data",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Meta Title",
    },
    {
      name: "description",
      type: "text",
      title: "Meta Description",
    },
    {
      name: "metaImg",
      type: "image",
      title: "Meta Image",
      option: {
        hotspot: true,
      },
    },
  ],
};
