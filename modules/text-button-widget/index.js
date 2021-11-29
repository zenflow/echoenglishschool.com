const { getStyleFieldSetFields } = require("../../lib/field-sets/style");

module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Text Button",
  },
  fields: {
    add: {
      text: {
        label: "Text",
        type: "string",
        required: true,
        def: "BOOK YOUR FREE CONSULTATION",
      },
      link: {
        label: "Link",
        type: "string",
        required: true,
        def: "/#contact",
      },
      ...getStyleFieldSetFields("box", {
        def: { boxAlignment: "center", boxCornerRadius: 1 },
      }),
      ...getStyleFieldSetFields("background", {
        def: { backgroundColor: "#ffd901" },
      }),
      ...getStyleFieldSetFields("text", {
        def: { textColor: "#000000", textAlign: "center", textFont: "Roboto" },
      }),
    },
  },
};
