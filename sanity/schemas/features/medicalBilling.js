export default {
  name: "medicalBilling",
  type: "document",
  title: "Medical Billing Software",
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
      name: "importantForHeathCare",
      type: "cardGroups",
      title:
        "Why are RCM Software Solutions Important for Healthcare Facilities",
    },
    {
      name: "benefitsOfHolisticRCM",
      type: "cardGroups",
      title: "Benefits of a Holistic Revenue Cycle Management",
    },
    {
      name: "stepsForEffectiveRevenue",
      type: "cardGroups",
      title: "Steps for an Effective Revenue Cycle",
    },
    {
      name: "benefitsOfRCM",
      type: "navFieldSection",
      title: "Benefits of Revenue Cycle Management (RCM) Software",
    },
    {
      name: "chooseBestMedicalBilling",
      type: "cardGroups",
      title: "How to Choose the Best Medical Billing Services Company",
    },
    {
      name: "whyChooseUs",
      type: "cardGroups",
      title: "Why Choose Us As Your Premier Medical Billing Services Company",
    },
  ],
};
