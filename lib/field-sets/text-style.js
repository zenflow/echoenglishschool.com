/*
TODO:
  - textSize field
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
    textAlign: {
      label: "Text Align",
      type: "select",
      choices: ["left", "center", "right"].map((value) => ({ label: value, value })),
    },
    textFont: {
      label: "Text Font",
      htmlHelp: `<span class="font-demo">${getTextFontOptions()
        .map((value) => `<span class="font-demo--${value.split(" ").join("-")}">${value}</span>`)
        .join(", ")}</span>`,
      type: "select",
      choices: getTextFontOptions().map((value) => ({ label: value, value })),
    },
  };
}

function getTextFontOptions() {
  /* "Open Sans", "Montserrat", "Nunito", "Asap", "Lato" */
  return ["Roboto", "Raleway", "Quicksand", "Dosis"];
}

function getTextStyle(apos, obj) {
  return Object.entries(getStyle())
    .map(([key, value]) => `${key}: ${value}; `)
    .join("");

  function getStyle() {
    const style = {};
    if (obj.textColor) {
      Object.assign(style, {
        color: obj.textColor,
        "--my-text-color": obj.textColor, // can be used by non-text elements
      });
    }
    if (obj.textFont) {
      Object.assign(style, {
        "font-family": JSON.stringify(obj.textFont),
      });
    }
    if (obj.textAlign) {
      Object.assign(style, {
        "text-align": obj.textAlign,
      });
    }
    return style;
  }
}

module.exports = {
  getTextStyleFields,
  getTextFontOptions,
  getTextStyle,
};
