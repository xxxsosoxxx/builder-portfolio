import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "custom",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true }
          ]
        }
      ]
    })
  ],
  siteMap: ({ documents }) => {
  return documents.map((document) => {
    return {
      stableId: document.id,
      urlPath: `/${document.modelName.toLowerCase()}/${document.id}`,
      document,
      isHomePage: document.id === "home" // optionnel
    };
  });
}
});
