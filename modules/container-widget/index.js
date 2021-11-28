const { getBoxStyleFields } = require("../../lib/field-sets/box-style");
const { getBackgroundStyleFields } = require("../../lib/field-sets/background-style");
const { getTextStyleFields } = require("../../lib/field-sets/text-style");

module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Container",
  },
  fields: {
    add: {
      ...getBoxStyleFields(),
      ...getBackgroundStyleFields(),
      ...getTextStyleFields(),
      main: {
        label: "Content",
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            image: {},
            "text-button": {},
            container: {},
            columns: {},
          },
        },
      },
    },
  },
};
