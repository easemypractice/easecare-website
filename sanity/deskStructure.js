import S from "@sanity/desk-tool/structure-builder";

const deskStructure = () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Form Submissions")
        .schemaType("formSubmission")
        .child(S.documentTypeList("formSubmission").title("Form Submissions")),
      // Add other document types here as needed
    ]);
export default deskStructure;
