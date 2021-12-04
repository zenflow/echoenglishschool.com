const { colorPickerOptions } = require("../../lib/colorPickerOptions");

module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Timeline",
  },
  fields: {
    add: {
      steps: {
        type: "array",
        min: 1,
        titleField: "labelText",
        fields: {
          add: {
            labelText: {
              type: "string",
              required: true,
            },
            labelColor: {
              type: "color",
              required: true,
              options: {
                pickerOptions: colorPickerOptions(),
              },
            },
            main: {
              label: "Content",
              type: "area",
              options: {
                widgets: {
                  "@apostrophecms/rich-text": {},
                  "text-button": {},
                },
              },
            },
          },
        },
      },
    },
  },
};
