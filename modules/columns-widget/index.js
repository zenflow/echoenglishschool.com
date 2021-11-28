const { schemes, schemesMinColumns, schemesMaxColumns } = require("./schemes");

module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Columns",
  },
  fields: {
    add: {
      scheme: {
        label: "Scheme",
        type: "select",
        required: true,
        def: Object.keys(schemes)[0],
        choices: Object.keys(schemes).map((value) => ({ label: value, value })),
      },
      breakpoint: {
        label: "Responsive Breakpoint",
        help: "When the display width is smaller than this, columns won't be used. Instead, column content will be full screen width & shown one above the other.",
        type: "select",
        required: true,
        def: "md",
        choices: [
          { label: "None", value: "" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
        ],
      },
      minHeight: {
        label: "Minimum Height",
        help: "Entire columns element will be at least this height regardless of content height",
        type: "float",
        def: 0,
      },
      ...Object.fromEntries(
        Array.from({ length: schemesMaxColumns }).map((_, index) => {
          const name = `column${index + 1}ContentPosition`;
          const config = {
            type: "select",
            if: getConditionForColumn(index),
            required: true,
            def: "center",
            choices: [
              "center",
              "start",
              "end",
              "space-evenly",
              "space-between",
              "space-around",
            ].map((value) => ({ label: value.replace(/-/g, " "), value })),
          };
          return [name, config];
        }),
      ),
      ...Object.fromEntries(
        Array.from({ length: schemesMaxColumns }).map((_, index) => {
          const name = `column${index + 1}Content`;
          const config = {
            type: "area",
            if: getConditionForColumn(index),
            options: {
              widgets: {
                container: {},
                columns: {},
              },
            },
          };
          return [name, config];
        }),
      ),
    },
  },
};

function getConditionForColumn(index) {
  if (index < schemesMinColumns) {
    return undefined;
  }
  return {
    $or: Object.entries(schemes)
      .filter(([, columns]) => index < columns.length)
      .map(([scheme]) => ({ scheme })),
  };
}
