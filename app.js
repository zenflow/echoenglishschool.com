require("apostrophe")({
  shortName: "echo-english-school",
  baseUrl: process.env.BASE_URL,
  modules: {
    // --- core ---

    // TODO: this should be default
    "@apostrophecms/image-tag": { options: { slugPrefix: "image-tag-" } },
    "@apostrophecms/file-tag": { options: { slugPrefix: "file-tag-" } },

    // --- extensions ---
    "@apostrophecms/sitemap": {},
    "@apostrophecms/redirect": { options: { slugPrefix: "redirect-" } },

    // --- custom ---
    "init-db": {},
    helper: {},
    asset: {},
    admin: {},
    "default-page": {},
    "section-widget": {},
    "container-widget": {},
    "columns-widget": {},
    "image-widget": {},
    "text-button-widget": {},
  },
});
