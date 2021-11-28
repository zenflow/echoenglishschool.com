const { getBackgroundStyleFields } = require("../../lib/field-sets/background-style");
const { getTextStyleFields } = require("../../lib/field-sets/text-style");

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
      ...getBackgroundStyleFields(),
      ...getTextStyleFields(),
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
