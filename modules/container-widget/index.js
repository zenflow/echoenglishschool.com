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
          widgets: defaultWidgets({ exclude: ["columns"] }),
        },
      },
      backgroundColor: {
        type: "color",
        label: "Background Color",
        help: "Background color of the container",
        options: {
          pickerOptions: colorPickerOptions(),
        },
      },
      borderColor: {
        type: "color",
        label: "Border Color",
        help: "Border color of the container",
        options: {
          pickerOptions: colorPickerOptions(),
        },
      },
      radius: {
        type: "boolean",
        label: "Border Radius",
        help: "Adds a 20px border radius",
        def: false,
      },
    },
  },
};
