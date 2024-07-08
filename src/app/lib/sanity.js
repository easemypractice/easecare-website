import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
// import {apiVersion, dataset, projectId, readToken} from '../../../sanity/env'
export const client = createClient({
  apiVersion: "2024-05-06",
  dataset: "producation",
  projectId: "w2lce9jj",
  useCdn: false,
  token:
    "skUtP3B04gPGuJCU9JcVyoavvtzN0aOYAVAZN8ZLHMgVzBPK06wvki2nuoWBOKpXnvWGjNPcyZSzI1NOqdkA9PtnpITdfQ0bHcU9gjCL2Siv6wfGoJKqhhpo1mpt2N6M9vfJER1LQII3IWa355c2prTNXjFIkbpNvb02A1qeUsWEvIS4u1rU",
});
const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}
