export default {
  name: "navFieldSection",
  type: "object",
  title: "Features Section",
  fields: [
    {
      name: "title",
      type: "blockContent",
      title: "Title",
    },
    {
      name: "NacSec",
      type: "array",
      of: [
        {
          type: "navSection",
        },
      ],
    },
  ],
};

export const NavSection = {
  name: "navSection",
  type: "object",
  title: "Nav Section",
  fields: [
    {
      name: "path",
      title: "Path",
      type: "string",
    },
    {
      name: "myIcon",
      title: "My Icon",
      type: "icon",
    },
    {
      name: "iconSize",
      title: "Icon Size",
      type: "number",
    },
    {
      name: "contant",
      type: "text",
      title: "Content",
    },
  ],
};
