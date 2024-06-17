// sanity/schemas/page.js
export default {
  name: "homePage",
  type: "document",
  title: "Home Page",
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
      of: [
        // { type: "block" },
        { type: "patientManagementBlock" }, // Ensure this is included
      ],
    },
  ],
};
