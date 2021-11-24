/*
TODO:
  - textFont field
  - textSize field
  - textAlign field
  - what about styles for links?
*/

const { colorPickerOptions } = require("../colorPickerOptions");

function getTextStyleFields() {
  return {
    textColor: {
      label: "Text Color",
      type: "color",
      options: {
        pickerOptions: colorPickerOptions(),
      },
    },
  };
}

function getTextStyle(apos, obj) {
  const textColor = obj.textColor;

  return Object.entries(getStyle())
    .map(([key, value]) => `${key}: ${value}; `)
    .join("");

  function getStyle() {
    const style = {};
    if (textColor) {
      Object.assign(style, {
        color: textColor,
        "--my-text-color": textColor, // can be used by non-text elements
      });
    }
    return style;
  }
}

module.exports = {
  getTextStyleFields,
  getTextStyle,
};
