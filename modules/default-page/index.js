module.exports = {
  extend: "@apostrophecms/page-type",
  options: {
    label: "Default Page",
  },
  fields: {
    add: {
      main: {
        label: "Content",
        type: "area",
        options: {
          widgets: {},
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
