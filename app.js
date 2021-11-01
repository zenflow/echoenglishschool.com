require("apostrophe")({
  shortName: "apos-my-site",
  baseUrl: process.env.BASE_URL,
  modules: {
    // --- core ---

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
