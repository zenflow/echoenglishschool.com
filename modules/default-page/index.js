const { defaultWidgets } = require("../../lib/defaultWidgets");

module.exports = {
  extend: "@apostrophecms/page-type",
  options: {
    label: "Default Page",
  },
  fields: {
    add: {
      main: {
        type: "area",
        options: {
          widgets: defaultWidgets(),
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "main"],
      },
    },
  },
};
