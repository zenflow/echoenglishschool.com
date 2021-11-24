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
          widgets: {
            "home-section": {},
          },
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
