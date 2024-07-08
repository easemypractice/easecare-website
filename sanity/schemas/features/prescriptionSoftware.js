export default {
  name: "prescription",
  type: "document",
  title: "Prescription Software",
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
      name: "exploreFeild",
      type: "cardGroups",
      title: "Explore the Most User-Friendly and Connected Software Solution",
    },
    {
      name: "whyGoodForAnyMedicalOrg",
      type: "cardGroups",
      title:
        "Here is why our prescription software is a good choice for any medical organization",
    },
    {
      name: "controlledSubstancesAndDrugs",
      type: "cardGroups",
      title:
        "E-Prescribing Software for Controlled Substances and Legend Drugs",
    },
    {
      name: "whyPrescriptionWritingSoftware",
      type: "cardGroups",
      title: "Why Prescription Writing Software",
    },
    {
      name: "featuresOfEPrescription",
      type: "navFieldSection",
      title:
        "Features of EaseCare’s e-Prescription Software for Doctors & Clinics",
    },
    {
      name: "contactFormOne",
      type: "contactSection",
      title: "Contact Form 1",
    },
    {
      name: "enhancePatientSafty",
      type: "cardGroups",
      title:
        "How Does e-prescribing Enhance Patient Safety and Boost Compliance",
    },
    {
      name: "contactFormTwo",
      type: "contactSection",
      title: "Contact Form 2",
    },
    {
      name: "offeringAdditionalSolutions",
      type: "cardGroups",
      title:
        "Offering Additional Solutions for Your Electronic Prescription Management Workflow",
    },
  ],
};
