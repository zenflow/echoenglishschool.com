const { defaultWidgets } = require("../../lib/defaultWidgets");
const { colorPickerOptions } = require("../../lib/colorPickerOptions");

module.exports = {
  extend: "@apostrophecms/widget-type",
  icons: {
    "border-outside": "BorderOutside",
  },
  options: {
    label: "Container",
    icon: "border-outside",
  },
  fields: {
    add: {
      content: {
        type: "area",
        options: {
          widgets: defaultWidgets({ fullWidthWidgets: false }),
        },
      },
      backgroundColor: {
        type: "color",
        label: "Background Color",
        options: {
          pickerOptions: colorPickerOptions(),
        },
      },
      borderColor: {
        type: "color",
        label: "Border Color",
        options: {
          pickerOptions: colorPickerOptions(),
        },
      },
      radius: {
        type: "boolean",
        label: "Border Radius",
        def: false,
      },
    },
  },
};
