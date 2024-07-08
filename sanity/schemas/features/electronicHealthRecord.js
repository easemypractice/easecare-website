export default {
  name: "electronicHealthRecord",
  type: "document",
  title: "Electronic Health Records Software",
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
      name: "benefitsOfEHR",
      type: "cardGroups",
      title: "Benefits of EHR System",
    },
    {
      name: "ContactFormOne",
      type: "contactSection",
      title: "Contact Form 1",
    },
    {
      name: "FeaturesEHR",
      type: "cardGroups",
      title: "EHR Software Features",
    },
    {
      name: "WhatIsEHR",
      type: "cardGroups",
      title: "What is an EMR System",
    },
    {
      name: "EHRvsEMR",
      type: "cardGroups",
      title: "EMR vs. EHR: What's the Difference?",
    },
    {
      name: "typesOfEHR",
      type: "navFieldSection",
      title: "Types of Electronic Health Records Systems",
    },
    {
      name: "ContactFormTwo",
      type: "contactSection",
      title: "Contact Form 2",
    },
    {
      name: "findingBestEHR",
      type: "cardGroups",
      title: "Finding the Best Electronic Medical Records Software In India",
    },
    {
      name: "benefitsOfUsingEHR",
      type: "cardGroups",
      title:
        "Benefits of Using EMR EHR Software for Patient and Clinic Management",
    },
  ],
};
