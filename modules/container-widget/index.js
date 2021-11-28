const { getBackgroundStyleFields } = require("../../lib/style/background");
const { getTextStyleFields } = require("../../lib/style/text");
const { getBoxStyleFields } = require("../../lib/style/box");

module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Container",
  },
  fields: {
    add: {
      ...getBackgroundStyleFields(),
      ...getTextStyleFields(),
      ...getBoxStyleFields(),
      main: {
        label: "Content",
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            "@apostrophecms/image": {},
            "@apostrophecms/video": {},
            container: {},
            columns: {},
          },
        },
      },
    },
  },
};
