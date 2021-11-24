/*
  TODO:
    - fields for gradient
    - fields for background image position / repeat / size / attachment (attachment e.g. fixed)
*/

const { colorPickerOptions } = require("../colorPickerOptions");

function getBackgroundStyleFields() {
  return {
    _backgroundImage: {
      label: "Background Image",
      type: "relationship",
      withType: "@apostrophecms/image",
      max: 1,
    },
    backgroundColor: {
      label: "Background Color",
      type: "color",
      options: {
        pickerOptions: colorPickerOptions(),
      },
    },
  };
}

function getBackgroundStyle(apos, obj) {
  const backgroundImage = apos.attachment.first(obj._backgroundImage);
  const backgroundColor = obj.backgroundColor;

  return Object.entries(getStyle())
    .map(([key, value]) => `${key}: ${value}; `)
    .join("");

  function getStyle() {
    if (!backgroundColor && !backgroundImage) {
      return {};
    }
    if (backgroundColor && !backgroundImage) {
      return { "background-color": backgroundColor };
    }
    const backgroundParts = [
      backgroundColor && `linear-gradient(${backgroundColor}, ${backgroundColor})`,
      `url(${JSON.stringify(apos.attachment.url(backgroundImage))})`,
    ];
    return {
      background: backgroundParts.filter(Boolean).join(", "),
      "background-position": "center",
      "background-repeat": "no-repeat",
      "background-size": "cover",
    };
  }
}

module.exports = {
  getBackgroundStyleFields,
  getBackgroundStyle,
};
