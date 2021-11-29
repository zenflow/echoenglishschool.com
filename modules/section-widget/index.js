const { getStyleFieldSetFields } = require("../../lib/field-sets/style");

module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Section",
  },
  fields: {
    add: {
      isLinkInNavbar: {
        label: "Show link in navbar",
        type: "boolean",
        def: false,
      },
      name: {
        label: "Name",
        type: "string",
        required: true,
        if: { isLinkInNavbar: true },
      },
      ...getStyleFieldSetFields("background"),
      ...getStyleFieldSetFields("text"),
      main: {
        label: "Content",
        type: "area",
        options: {
          widgets: {
            container: {},
            columns: {},
          },
        },
      },
    },
  },
};
