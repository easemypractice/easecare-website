export default {
  name: "feature",
  type: "document",
  title: "Features Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
    },
    {
      name: "heroComp",
      type: "heroSection",
      title: "Hero Section",
    },
    {
      name: "imageWithContent",
      type: "array",
      title: "Image With Content",
      of: [{ type: "sideImageComp" }],
    },
    {
      name: "whyEaseCareClarity",
      type: "cardGroups",
      title: "Why Choose Easecare Clarity",
    },
  ],
};

export const SideImageComponent = {
  name: "sideImageComp",
  type: "object",
  title: "Side Image Component",
  fields: [
    {
      name: "backgroundColor",
      type: "color",
      title: "Background Color",
    },
    {
      name: "content",
      type: "blockContent",
      title: "Content",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
};
