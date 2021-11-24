const { getBackgroundStyleFields } = require("../../lib/style/background");
const { getTextStyleFields } = require("../../lib/style/text");

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
            "@apostrophecms/rich-text": {},
          },
        },
      },
    },
  },
};
