// sanity/schemas/page.js
export default {
  name: "homePage",
  type: "document",
  title: "Features",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Page Title",
    },
    {
      name: "heroComp",
      type: "array",
      title: "HeroComp",
      of: [{ type: "heroSection" }],
    },
  ],
};
