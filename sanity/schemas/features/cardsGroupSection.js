import { defineField } from "sanity";

export default {
  name: "cardGroups",
  type: "object",
  title: "Card Group",
  fields: [
    {
      name: "title",
      type: "blockContent",
      title: "Title",
    },
    {
      name: "sectionBg",
      type: "color",
      title: "Section background",
    },
    {
      name: "cardsPerRow",
      type: "number",
      title: "Cards per row",
    },
    {
      name: "type",
      type: "object",
      title: "Type of cardGrp",
      fields: [
        defineField({
          name: "cardType",
          type: "string",
          title: "Type of Card Group",
          initialValue: "benefits",
          options: {
            list: [
              { title: "Benefits", value: "benefits" },
              { title: "Varients", value: "varients" },
              { title: "Practice", value: "practice" },
              { title: "Multi-color Cards", value: "muliColorCard" },
            ],
            isHighlighted: true,
          },
        }),
        {
          name: "benefitCards",
          type: "array",
          title: "Benefit Cards",
          of: [{ type: "benefitCards" }],
          hidden: ({ parent }) => parent?.cardType !== "benefits",
        },
        {
          name: "practiceCards",
          type: "array",
          title: "Practice Cards",
          of: [{ type: "practiceCards" }],
          hidden: ({ parent }) => parent?.cardType !== "practice",
        },
        {
          name: "varientCards",
          type: "array",
          title: "Varient Cards",
          of: [{ type: "varientCards" }],
          hidden: ({ parent }) => parent?.cardType !== "varients",
        },
        {
          name: "multiColorCards",
          type: "array",
          title: "Multi-color Cards",
          of: [{ type: "multiColorCard" }],
          hidden: ({ parent }) => parent?.cardType !== "muliColorCard",
        },
      ],
    },
  ],
};

export const benefitCard = {
  name: "benefitCards",
  type: "object",
  title: "benefit cards",
  fields: [
    {
      name: "cardTitle",
      title: "Card Title",
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
      name: "backGroundColor",
      title: "Background color",
      type: "color",
    },
    {
      name: "benefitCard",
      type: "array",
      title: "Benefit Card",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
export const VarientCard = {
  name: "varientCards",
  type: "object",
  title: "VarientsCards",
  fields: [
    {
      name: "cardTitle",
      title: "Card Title",
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
      name: "backGroundColor",
      title: "Background color",
      type: "color",
    },
    {
      name: "iconBackGround",
      title: "Icon Background color",
      type: "color",
    },
    {
      name: "iconColor",
      title: "Icon color",
      type: "color",
    },
    {
      name: "varientCard",
      type: "array",
      title: "Varient Card",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
export const PracticeCard = {
  name: "practiceCards",
  type: "object",
  title: "Practice Cards",
  fields: [
    {
      name: "cardTitle",
      title: "Card Title",
      type: "string",
    },
    {
      name: "myIcon",
      title: "My Icon",
      type: "icon",
    },
    {
      name: "backGroundColor",
      title: "Background color",
      type: "color",
    },
    {
      name: "iconBackGround",
      title: "Icon Background color",
      type: "color",
    },
    {
      name: "iconSize",
      title: "Icon Size",
      type: "number",
    },
    {
      name: "iconColor",
      title: "Icon color",
      type: "color",
    },
    {
      name: "practiceCard",
      type: "array",
      title: "Practice Card",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
export const multiColorCard = {
  name: "multiColorCard",
  type: "object",
  title: "Multi color Cards",
  fields: [
    {
      name: "myIcon",
      title: "My Icon",
      type: "icon",
    },
    {
      name: "backGroundColor",
      title: "Background color",
      type: "color",
    },
    {
      name: "iconBackGround",
      title: "Icon Background color",
      type: "color",
      options: {
        disableAlpha: false,
      },
    },
    {
      name: "iconSize",
      title: "Icon Size",
      type: "number",
    },
    {
      name: "iconColor",
      title: "Icon color",
      type: "color",
    },
    {
      name: "multiColorCard",
      type: "array",
      title: "Practice Card",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
