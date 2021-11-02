require("apostrophe")({
  shortName: "apos-my-site",
  baseUrl: process.env.BASE_URL,
  modules: {
    // --- core ---

    // TODO: this should be default
    "@apostrophecms/image-tag": { options: { slugPrefix: "image-tag-" } },
    "@apostrophecms/file-tag": { options: { slugPrefix: "file-tag-" } },

    // --- extensions ---
    "@apostrophecms/redirect": {},
    "@apostrophecms/sitemap": {},

    // --- custom ---
    debug: {},
    "init-db": {},
    helper: {},
    asset: {},
    "columns-widget": {},
    "container-widget": {},
    "default-page": {},
  },
});
