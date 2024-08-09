import author from "./schemas/author";
import blog from "./schemas/blog";
import category from "./schemas/category";
import clarityMethod from "./schemas/clarityMethod";
import formSubmission from "./schemas/formSubmission";
import parentCategory from "./schemas/parentCategory";
import seo from "./schemas/seo";
import subCategory from "./schemas/subCategory";
import heroSection from "./schemas/features/heroSection";
import cardsGroupSection, {
  PracticeCard,
  VarientCard,
  benefitCard,
  multiColorCard,
} from "./schemas/features/cardsGroupSection";
import contactSection from "./schemas/features/contactSection";
import imageWithList from "./schemas/features/imageWithList";
import navFieldsSection, {
  NavSection,
} from "./schemas/features/navFieldsSection";
import accordienSection, {
  accordien,
} from "./schemas/features/accordienSection";
import metadata from "./schemas/metadata";
import patientManagement from "./schemas/features/patientManagement";
import practiceManagement from "./schemas/features/practiceManagement";
import clinicManagement from "./schemas/features/clinicManagement";
import healthCareManagement from "./schemas/features/healthCareManagement";
import doctorAppoinment from "./schemas/features/doctorAppoinment";
import medicalBilling from "./schemas/features/medicalBilling";
import multiClinic from "./schemas/features/multiClinic";
import appoinmentScheduling from "./schemas/features/appoinmentScheduling";
import prescriptionSoftware from "./schemas/features/prescriptionSoftware";
import offlineSoftware from "./schemas/features/offlineSoftware";
import inventoryManagement from "./schemas/features/inventoryManagement";
import telemedicineApp from "./schemas/features/telemedicineApp";
import electronicHealthRecord from "./schemas/features/electronicHealthRecord";
import blockContent from "./schemas/features/blockContent";
import tabsSelectCards, {
  tabsContent,
} from "./schemas/features/tabsSelectCards";
import feature, { SideImageComponent } from "./schemas/features/feature";
import clarityGuide from "./schemas/clarityGuide";
export const schema = {
  types: [
    blog,
    author,
    seo,
    clarityMethod,
    category,
    subCategory,
    parentCategory,
    formSubmission,
    heroSection,
    cardsGroupSection,
    contactSection,
    imageWithList,
    navFieldsSection,
    benefitCard,
    PracticeCard,
    VarientCard,
    NavSection,
    accordienSection,
    accordien,
    metadata,
    patientManagement,
    practiceManagement,
    clinicManagement,
    healthCareManagement,
    doctorAppoinment,
    medicalBilling,
    multiClinic,
    appoinmentScheduling,
    prescriptionSoftware,
    offlineSoftware,
    inventoryManagement,
    telemedicineApp,
    electronicHealthRecord,
    blockContent,
    multiColorCard,
    tabsSelectCards,
    tabsContent,
    feature,
    SideImageComponent,
    clarityGuide,
  ],
};
