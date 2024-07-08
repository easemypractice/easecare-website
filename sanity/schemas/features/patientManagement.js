export default {
  name: "patientManagement",
  type: "document",
  title: "Patient Management",
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
      name: "PatientBenefits",
      type: "cardGroups",
      title: "Card Group",
    },
    {
      name: "ContactFormOne",
      type: "contactSection",
      title: "Contact Form 1",
    },
    {
      name: "ExploringPatientManagement",
      type: "cardGroups",
      title: "Exploring Patient Management Software",
    },
    {
      name: "FeaturesOfPatientManagement",
      type: "cardGroups",
      title: "Features of Patient Management Software",
    },
    {
      name: "ContactFormTwo",
      type: "contactSection",
      title: "Contact Form 2",
    },
    {
      name: "challangeFaced",
      type: "imageWithList",
      title: "Challange faced by healthcare professional",
    },
    {
      name: "selectRightPatient",
      type: "navFieldSection",
      title: "Select the Right Patient",
    },
    {
      name: "ContactFormThree",
      type: "contactSection",
      title: "Contact Form 3",
    },
    {
      name: "WhyChoosePatientManagement",
      type: "cardGroups",
      title: "Why Choose Us for the Best Patient Management Software?",
    },
    {
      name: "accordienSec",
      type: "accordienSection",
      title: "Accordien Section",
    },
  ],
};
