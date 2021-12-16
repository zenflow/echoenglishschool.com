const { getIconField } = require("../../lib/field-sets/icon");
const { colorPickerOptions } = require("../../lib/colorPickerOptions");
module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Accordion",
  },
  fields: {
    add: {
      items: {
        type: "array",
        min: 1,
        titleField: "title",
        fields: {
          add: {
            title: {
              type: "string",
              required: true,
            },
            main: {
              label: "Content",
              type: "area",
              options: {
                widgets: {
                  "@apostrophecms/rich-text": {},
                  image: {},
                  "text-button": {},
                },
              },
            },
          },
        },
      },
      backgroundColor: {
        type: "color",
        required: true,
        def: "#f8f8f8",
        options: {
          pickerOptions: colorPickerOptions(),
        },
      },
      headingTextColor: {
        type: "color",
        required: true,
        def: "#000000",
        options: {
          pickerOptions: colorPickerOptions(),
        },
      },
      headingIcon: getIconField({ required: false, def: "solid question-circle" }),
      headingIconColor: {
        type: "color",
        required: true,
        def: "#000000",
        options: {
          pickerOptions: colorPickerOptions(),
        },
      },
      contentBackgroundColor: {
        type: "color",
        required: true,
        def: "#ffffff",
        options: {
          pickerOptions: colorPickerOptions(),
        },
      },
      contentTextColor: {
        type: "color",
        required: true,
        def: "#000000",
        options: {
          pickerOptions: colorPickerOptions(),
        },
      },
    },
  },
};
