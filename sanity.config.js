/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schema } from "./sanity/schema";
import { colorInput } from "@sanity/color-input";
import { iconify } from "sanity-plugin-iconify";

export default defineConfig({
  basePath: "/studio",
  projectId: "w2lce9jj",
  dataset: "dev",
  schema: schema,
  plugins: [
    structureTool(),
    colorInput(),
    visionTool({ defaultApiVersion: "2024-05-06" }),
    iconify({
      // collections: ['fa-brands', 'mdi', ...],
      showName: true,
    }),
  ],
});
