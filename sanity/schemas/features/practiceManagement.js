export default {
  name: "practiceManagement",
  type: "document",
  title: "Practice Management",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Page Title",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
    },
    {
      name: "metadata",
      type: "metadata",
    },
    {
      name: "heroComp",
      type: "heroSection",
      title: "Hero Component",
    },
    {
      name: "benefitsOfTakingsoftware",
      type: "cardGroups",
      title: "Benefits of Taking Software for Healthcare Management",
    },
    {
      name: "contactFormOne",
      type: "contactSection",
      title: "Contact Form 1",
    },
    {
      name: "reasonToImplementSoftware",
      type: "cardGroups",
      title:
        "Reasons to Implement Healthcare Management Software to Improve Your Health Practice",
    },
    {
      name: "contactFormTwo",
      type: "contactSection",
      title: "Contact Form 2",
    },
    {
      name: "benefitsOfPracticeManagemnent",
      type: "tabSelectCard",
      title: "Benefits of Practice Management Software for different types",
    },
    {
      name: "contactFormThree",
      type: "contactSection",
      title: "Contact Form 3",
    },
    {
      name: "howToUseSoftware",
      type: "cardGroups",
      title: "How Can You Use Practice Management Software",
    },
    {
      name: "UsersOfSoftware",
      type: "navFieldSection",
      title: "Uses of Healthcare Management Software for Solo Practices",
    },
    {
      name: "howUseFullForLargerPractice",
      type: "cardGroups",
      title:
        "How Useful is Healthcare Management Software for Larger Practices",
    },
    {
      name: "contactFormFour",
      type: "contactSection",
      title: "Contact Form 4",
    },
  ],
};
