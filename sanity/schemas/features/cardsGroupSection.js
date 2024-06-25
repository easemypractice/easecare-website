import { defineField } from "sanity";

export default {
  name: "cardGroups",
  type: "object",
  title: "Card Group",
  fields: [
    {
      name: "title",
      type: "array",
      title: "Title",
      of: [{ type: "block" }],
    },
    {
      name: "description",
      type: "string",
      title: "Description",
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
          name: "VarientCards",
          type: "array",
          title: "Varient Cards",
          of: [{ type: "VarientCards" }],
          hidden: ({ parent }) => parent?.cardType !== "varients",
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
      name: "benefitCard",
      type: "array",
      title: "Benefit Card",
      of: [
        {
          name: "myIcon",
          title: "My Icon",
          type: "icon",
        },
        {
          type: "block",
        },
      ],
    },
  ],
};
export const VarientCard = {
  name: "VarientCards",
  type: "object",
  title: "VarientsCards",
  fields: [
    {
      name: "varientCard",
      type: "array",
      title: "Varient Card",
      of: [
        {
          type: "block",
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
          name: "IconBackGround",
          title: "Icon Background color",
          type: "color",
        },
        {
          name: "IconColor",
          title: "Icon color",
          type: "color",
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
      name: "practiceCard",
      type: "array",
      title: "Practice Card",
      of: [
        {
          type: "block",
        },
        {
          name: "myIcon",
          title: "My Icon",
          type: "icon",
        },
        {
          name: "IconColor",
          title: "Icon color",
          type: "color",
        },
      ],
    },
  ],
};
