const { getBackgroundStyleFields } = require("../../lib/field-sets/background-style");
const { getTextStyleFields } = require("../../lib/field-sets/text-style");
const { getBoxStyleFields } = require("../../lib/field-sets/box-style");

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
            container: {},
            columns: {},
          },
        },
      },
    },
  },
};
