const { defaultWidgets } = require("../../../lib/defaultWidgets");

module.exports = {
  options: {
    label: "Home Page",
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
