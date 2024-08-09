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
      type: "string",
      title: "Phone Number",
    },
    {
      name: "client",
      type: "string",
      title: "Clinic Name",
    },
    {
      name: "state",
      type: "string",
      title: "State",
    },
    {
      name: "city",
      type: "string",
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
