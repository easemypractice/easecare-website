import author from "./schemas/author";
import blog from "./schemas/blog";
import category from "./schemas/category";
import clarityMethod from "./schemas/clarityMethod";
import formSubmission from "./schemas/formSubmission";
import parentCategory from "./schemas/parentCategory";
import seo from "./schemas/seo";
import subCategory from "./schemas/subCategory";
import homePage from "./schemas/features/page";
import heroSection from "./schemas/features/heroSection";
import cardsGroupSection, {
  PracticeCard,
  VarientCard,
  benefitCard,
} from "./schemas/features/cardsGroupSection";
import contactSection from "./schemas/features/contactSection";
import imageWithList from "./schemas/features/imageWithList";
import navFieldsSection, {
  NavSection,
} from "./schemas/features/navFieldsSection";
import accordienSection, {
  accordien,
} from "./schemas/features/accordienSection";
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
    homePage,
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
  ],
};
