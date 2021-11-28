const { getBoxStyleFields } = require("../../lib/field-sets/box-style");
const { getBackgroundStyleFields } = require("../../lib/field-sets/background-style");
const { getTextStyleFields } = require("../../lib/field-sets/text-style");

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
      ...getBoxStyleFields({
        def: { boxAlignment: "center", boxCornerRadius: 1 },
      }),
      ...getBackgroundStyleFields({
        def: { backgroundColor: "#ffd901" },
      }),
      ...getTextStyleFields({
        def: { textColor: "#000000", textAlign: "center", textFont: "Roboto" },
      }),
    },
  },
};
