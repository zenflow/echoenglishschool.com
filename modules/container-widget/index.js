const { getStyleFieldSetFields } = require("../../lib/field-sets/style");

module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Container",
  },
  fields: {
    add: {
      ...getStyleFieldSetFields("margin"),
      ...getStyleFieldSetFields("box"),
      ...getStyleFieldSetFields("background"),
      ...getStyleFieldSetFields("text"),
      main: {
        label: "Content",
        type: "area",
        options: {
          widgets: {
            "@apostrophecms/rich-text": {},
            image: {},
            "text-button": {},
            "fancy-list": {},
            form: {},
            container: {},
            columns: {},
          },
        },
      },
    },
  },
};
