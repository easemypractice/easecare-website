export default {
  name: "tabSelectCard",
  type: "array",
  of: [{ type: "tabsContent" }],
};

export const tabsContent = {
  name: "tabsContent",
  type: "object",
  fields: [
    {
      name: "tabTitle",
      type: "string",
      title: "Tab Title",
    },
    {
      name: "tabCard",
      type: "cardGroups",
      title: "Tab Card select",
    },
  ],
};
