import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import {apiVersion, dataset, projectId} from '../../../sanity/env'
export const client = createClient({
  apiVersion: apiVersion,
  dataset: dataset,
  projectId: projectId,
  useCdn: false,
});
const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}
