export default {
  name: "telemedicineApp",
  type: "document",
  title: "Telemedicine App",
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
      name: "attractMorePatients",
      type: "cardGroups",
      title: "Attract More Patients",
    },
    {
      name: "extraBenefits",
      type: "cardGroups",
      title: "Extra Benefits of telemedicine App",
    },
    {
      name: "givePatientsWhatTheyWant",
      type: "cardGroups",
      title: "Give Patients What They Want",
    },
    {
      name: "contactFormOne",
      type: "contactSection",
      title: "Contact Form 1",
    },
    {
      name: "improvePatientsCare",
      type: "cardGroups",
      title:
        "Improve Patient Care with EaseCare’s Telemedicine Mobile App For Clinics",
    },
    {
      name: "simplifyMedicalPractice",
      type: "cardGroups",
      title: "Simplify Your Medical Practice Management",
    },
    {
      name: "contactFormTwo",
      type: "contactSection",
      title: "Contact Form 2",
    },
    {
      name: "featuresOfTelemedicine",
      type: "navFieldSection",
      title: "Features of EaseCare’s Telemedicine Mobile App",
    },
    {
      name: "contactFormThree",
      type: "contactSection",
      title: "Contact Form 3",
    },
  ],
};
