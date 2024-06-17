/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId: "w2lce9jj",
  dataset: "dev",
  schema: schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: "2024-05-06" })],
});
