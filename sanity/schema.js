import author from "./schemas/author";
import blog from "./schemas/blog";
import category from "./schemas/category";
import clarityMethod from "./schemas/clarityMethod";
import formSubmission from "./schemas/formSubmission";
import parentCategory from "./schemas/parentCategory";
import seo from "./schemas/seo";
import subCategory from "./schemas/subCategory";

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
  ],
};
