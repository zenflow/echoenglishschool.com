const { getStyleFieldSetFields } = require("../../lib/field-sets/style");

module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Block", // TODO: actually rename to 'block-widget'
  },
  fields: {
    add: {
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
