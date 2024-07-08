export default {
  name: "healthcareManagement",
  type: "document",
  title: "Healthcare Management",
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
      name: "benefitHealthCareManage",
      type: "cardGroups",
      title: "Benefits of Healthcare Management System",
    },
    {
      name: "contactFormOne",
      type: "contactSection",
      title: "Contact Form 1",
    },
    {
      name: "featuresOfHealthCare",
      type: "cardGroups",
      title: "Features of Healthcare Management System",
    },
    {
      name: "keyAspects",
      type: "cardGroups",
      title: "Key Aspects of Medical Records Management",
    },
    {
      name: "scope",
      type: "cardGroups",
      title: "Scope of Medical Records Management",
    },
    {
      name: "benefitOfEffectiveRecords",
      type: "navFieldSection",
      title: "Benefits of Effective Records Management System",
    },
    {
      name: "modulesOfHospitals",
      type: "cardGroups",
      title: "Modules of Hospital Management System",
    },
    {
      name: "howChooseBestPactice",
      type: "cardGroups",
      title: "How to Choose the Best Health Care Management Software?",
    },
  ],
};
