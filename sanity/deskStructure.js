// import S from "@sanity/desk-tool/structure-builder";

const deskStructure = (S) =>
  S.list()
    .showIcons(true)
    .defaultLayout("detail")
    .title("Base")
    .items([
      S.listItem()
        .title("Inquiry Form Submissions")
        .schemaType("formSubmission")
        .child(
          S.documentTypeList("formSubmission").title("Inquiry Form Submissions")
        ),
      S.divider(),
      S.listItem()
        .title("Features")
        .child(
          S.list()
            .title("Features")
            .items([
              S.listItem()
                .title("Patient Management")
                .child(
                  S.document()
                    .schemaType("patientManagement")
                    .documentId("patientManagement")
                ),
              S.listItem()
                .title("Practice Management")
                .child(
                  S.document()
                    .schemaType("practiceManagement")
                    .documentId("practiceManagement")
                ),
              S.listItem()
                .title("Clinic Management")
                .child(
                  S.document()
                    .schemaType("clinicManagement")
                    .documentId("clinicManagement")
                ),
              S.listItem()
                .title("HealthCare Management")
                .child(
                  S.document()
                    .schemaType("healthcareManagement")
                    .documentId("healthcareManagement")
                ),
              S.listItem()
                .title("Doctor Appoinment Management")
                .child(
                  S.document()
                    .schemaType("doctorAppoinment")
                    .documentId("doctorAppoinment")
                ),
              S.listItem()
                .title("Medical Billing Software")
                .child(
                  S.document()
                    .schemaType("medicalBilling")
                    .documentId("medicalBilling")
                ),
              S.listItem()
                .title("Multi Clinic Chain")
                .child(
                  S.document()
                    .schemaType("multiClinic")
                    .documentId("multiClinic")
                ),
              S.listItem()
                .title("Appoinment Scheduling Software")
                .child(
                  S.document()
                    .schemaType("appoinmentScheduling")
                    .documentId("appoinmentScheduling")
                ),
              S.listItem()
                .title("Prescription Software")
                .child(
                  S.document()
                    .schemaType("prescription")
                    .documentId("prescription")
                ),
              S.listItem()
                .title("Offline Software")
                .child(
                  S.document()
                    .schemaType("offlineSoftware")
                    .documentId("offlineSoftware")
                ),
              S.listItem()
                .title("Inventory Management Software")
                .child(
                  S.document()
                    .schemaType("inventoryManagement")
                    .documentId("inventoryManagement")
                ),
              S.listItem()
                .title("Telemedicine App For Clinic")
                .child(
                  S.document()
                    .schemaType("telemedicineApp")
                    .documentId("telemedicineApp")
                ),
              S.listItem()
                .title("Electronic Health Record")
                .child(
                  S.document()
                    .schemaType("electronicHealthRecord")
                    .documentId("electronicHealthRecord")
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Features Page")
        .child(S.document().schemaType("feature").documentId("feature")),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "formSubmission",
            "patientManagement",
            "practiceManagement",
            "clinicManagement",
            "healthcareManagement",
            "doctorAppoinment",
            "medicalBilling",
            "multiClinic",
            "appoinmentScheduling",
            "prescription",
            "offlineSoftware",
            "inventoryManagement",
            "telemedicineApp",
            "electronicHealthRecord",
            "feature",
          ].includes(listItem.getId())
      ),
    ]);
export default deskStructure;
