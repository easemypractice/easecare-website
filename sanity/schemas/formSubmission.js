const formSubmission = {
  name: "formSubmission",
  type: "document",
  title: "Client Form Data",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "phoneNumber",
      type: "text",
      title: "Phone Number",
    },
    {
      name: "client",
      type: "text",
      title: "Clinic Name",
    },
    {
      name: "state",
      type: "text",
      title: "State",
    },
    {
      name: "city",
      type: "text",
      title: "City",
    },
    {
      name: "address",
      type: "text",
      title: "Address",
    },
    {
      name: "submittedAt",
      type: "datetime",
      title: "Submitted At",
    },
  ],
};
export default formSubmission;
