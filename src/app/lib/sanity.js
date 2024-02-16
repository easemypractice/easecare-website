import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  apiVersion: "2023-08-13",
  dataset: "production",
  projectId: "n6nmro7y",
  useCdn: false,
});
const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}
