/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schema";
import { colorInput } from "@sanity/color-input";
import { iconify } from "sanity-plugin-iconify";
import deskStructure from "./sanity/deskStructure";

export default defineConfig({
  basePath: "/studio",
  projectId: "w2lce9jj",
  dataset: "production",
  schema: schema,
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    colorInput(),
    visionTool({ defaultApiVersion: "2024-05-06" }),
    iconify({
      showName: true,
    }),
  ],
});
