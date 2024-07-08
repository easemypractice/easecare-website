export default {
  name: "multiClinic",
  type: "document",
  title: "Multi Clinic Chain",
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
      name: "advanceSolutions",
      type: "cardGroups",
      title:
        "We are here with the Advanced Solutions for your complex problems",
    },
    {
      name: "contactFormOne",
      type: "contactSection",
      title: "Contact Form 1",
    },
    {
      name: "clinicSoftwareSolution",
      type: "cardGroups",
      title: "Clinic Software Solution for Managing Multi-Chain Clinics",
    },
    {
      name: "integratedAdmin",
      type: "cardGroups",
      title: "One Integrated Admin Dashboard",
    },
    {
      name: "contactFormTwo",
      type: "contactSection",
      title: "Contact Form 2",
    },
    {
      name: "centralizedStaffManagement",
      type: "navFieldSection",
      title: "Centralized Staff Management",
    },
    {
      name: "extraBenefits",
      type: "cardGroups",
      title: "Extra Benefits of multi clinic chain",
    },
    {
      name: "contactFormThree",
      type: "contactSection",
      title: "Contact Form 3",
    },
  ],
};
