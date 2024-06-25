export default {
  name: "accordienSection",
  type: "object",
  title: "Accordien Section",
  fields: [
    {
      name: "heading",
      type: "array",
      title: "Heading",
      of: [{ type: "block" }],
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
      name: "accordien",
      type: "array",
      title: "Accordien",
      of: [{ type: "block" }],
    },
  ],
};
