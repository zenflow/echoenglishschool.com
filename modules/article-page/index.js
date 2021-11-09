const { defaultWidgets } = require("../../lib/defaultWidgets");

module.exports = {
  extend: "@apostrophecms/piece-page-type",
  options: {
    label: "Blog Index Page",
    pluralLabel: "Blog Index Pages",
    perPage: 999_999_999,
  },
  fields: {
    add: {
      intro: {
        label: "Intro",
        type: "area",
        options: {
          widgets: defaultWidgets(),
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "intro"],
      },
    },
  },
};
