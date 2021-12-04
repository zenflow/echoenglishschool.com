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
        label: "Section Name",
        help: "Appears in the navbar & the browser title",
        type: "string",
        required: true,
        if: { isLinkInNavbar: true },
      },
      fullScreenWidthContent: {
        label: "Full Screen-Width Content",
        help: "Content will be full width of screen, even on extra large screens",
        type: "boolean",
        def: false,
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
