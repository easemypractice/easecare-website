export default {
  name: "accordienSection",
  type: "object",
  title: "Accordien Section",
  fields: [
    {
      name: "heading",
      type: "blockContent",
      title: "Heading",
    },
    {
      name: "accor",
      type: "array",
      title: "Accord",
      of: [{ type: "accordiens" }],
    },
  ],
};

export const accordien = {
  name: "accordiens",
  type: "object",
  title: "Accordien",
  fields: [
    {
      name: "accordienTitle",
      type: "string",
      title: "Accordien Title",
    },
    {
      name: "accordienContent",
      type: "text",
      title: "Accordien Content",
    },
  ],
};
