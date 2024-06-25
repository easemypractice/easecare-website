// sanity/schemas/page.js
export default {
  name: "features",
  type: "document",
  title: "Features",
  fields: [
    {
      title: "Slug",
      name: "slug",
      type: "slug",
    },
    {
      name: "title",
      type: "string",
      title: "Page Title",
    },
    {
      name: "heroComp",
      type: "array",
      title: "Hero Component",
      of: [{ type: "heroSection" }],
    },
    {
      name: "cardGroup",
      type: "array",
      title: "Card Group",
      of: [{ type: "cardGroups" }],
    },
    {
      name: "conttactComp",
      type: "array",
      title: "Contact Section",
      of: [{ type: "contactSection" }],
    },
    {
      name: "imageWithLinkComp",
      type: "array",
      title: "Image with list",
      of: [{ type: "imageWithList" }],
    },
    {
      name: "navLinkSection",
      type: "array",
      title: "Select Fields Section",
      of: [{ type: "navFieldSection" }],
    },
    {
      name: "accordienSec",
      type: "array",
      title: "Accordien Section",
      of: [{ type: "accordienSection" }],
    },
  ],
};
