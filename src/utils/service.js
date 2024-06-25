const { client } = require("@/app/lib/sanity");

//Features
export const getSlugs = async () => {
  const query = `*[_type == "features"]{slug}`;
  const data = await client.fetch(query);
  return data;
};

export const getFeaturesData = async (slug) => {
  if (slug) {
    const query = `*[_type == "features" && slug.current == "${slug}"]{
  heroComp
}`;
    const data = await client.fetch(query);
    return data;
  }
};
