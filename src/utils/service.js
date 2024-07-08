const { client } = require("@/app/lib/sanity");

//Features
export const getFeatureData = async (slug) => {
  if (slug) {
    const query = `*[slug.current == "${slug}"]`;
    const data = await client.fetch(query);
    return data;
  }
};
