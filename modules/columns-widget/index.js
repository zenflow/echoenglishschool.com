const { defaultWidgets } = require("../../lib/defaultWidgets");

module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Columns",
    icon: "pillar",
  },
  fields: {
    add: {
      cols: {
        type: "select",
        label: "Column Configuration",
        required: true,
        choices: [
          {
            label: "50% / 50%",
            value: "50-50",
            def: true,
          },
          {
            label: "33% / 33% / 33%",
            value: "33-33-33",
          },
        ],
      },
      one: {
        type: "area",
        contextual: true,
        options: {
          widgets: defaultWidgets({ exclude: ["columns"] }),
        },
      },
      two: {
        type: "area",
        contextual: true,
        options: {
          widgets: defaultWidgets({ exclude: ["columns"] }),
        },
      },
      three: {
        type: "area",
        contextual: true,
        if: {
          cols: "33-33-33",
        },
        options: {
          widgets: defaultWidgets({ exclude: ["columns"] }),
        },
      },
    },
  },
  icons: {
    pillar: "Pillar",
  },
};
