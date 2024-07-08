export default {
  name: "contactSection",
  type: "object",
  title: "Contact section",
  fields: [
    {
      title: "Is card purple",
      name: "purpleCard",
      type: "boolean",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "content",
      type: "blockContent",
      title: "Content",
    },
    {
      name: "btnName",
      type: "string",
      title: "Button Name",
    },
    {
      name: "btnLink",
      type: "string",
      title: "Button Link",
    },
  ],
};
