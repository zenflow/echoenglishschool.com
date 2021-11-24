module.exports = {
  options: {
    label: "Home Page",
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
