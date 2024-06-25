export default {
  name: "navFieldSection",
  type: "object",
  title: "Features Section",
  fields: [
    {
      name: "Heading",
      type: "array",
      of: [{ type: "block" }],
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
      name: "contant",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          name: "myIcon",
          title: "My Icon",
          type: "icon",
        },
      ],
    },
  ],
};
