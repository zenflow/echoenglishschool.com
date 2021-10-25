const { linkFields } = require("../../../lib/link");

module.exports = {
  fields: {
    add: {
      siteTitle: {
        label: "Site Title",
        type: "string",
        def: "My Site",
      },
      footerLinks: {
        label: "Footer Links",
        type: "array",
        titleField: "linkText",
        fields: {
          add: { ...linkFields },
        },
      },
    },
    group: {
      general: {
        label: "General",
        fields: ["siteTitle", "footerLinks"],
      },
    },
  },
};
