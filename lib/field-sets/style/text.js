/*
TODO:
  - textSize field
  - what about styles for links?
*/

const { colorPickerOptions } = require("../../colorPickerOptions");

function getTextFontOptions() {
  /* "Open Sans", "Montserrat", "Nunito", "Asap", "Lato" */
  return ["Roboto", "Raleway", "Quicksand", "Dosis"];
}

const styleFieldSet = {
  fields() {
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
  },
  styles(apos, widget) {
    const style = {};
    if (widget.textColor) {
      Object.assign(style, {
        color: widget.textColor,
        "--my-text-color": widget.textColor, // can be used by non-text elements
      });
    }
    if (widget.textFont) {
      Object.assign(style, {
        "font-family": JSON.stringify(widget.textFont),
      });
    }
    if (widget.textAlign) {
      Object.assign(style, {
        "text-align": widget.textAlign,
      });
    }
    return style;
  },
};

module.exports = {
  styleFieldSet,
  getTextFontOptions,
};
