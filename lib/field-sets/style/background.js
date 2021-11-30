/*
  TODO:
    - fields for gradient
    - fields for background image position / repeat / size / attachment (attachment e.g. fixed)
*/

const { colorPickerOptions } = require("../../colorPickerOptions");

const styleFieldSet = {
  fields() {
    return {
      backgroundImageEnabled: {
        label: "Background Image Enabled",
        type: "boolean",
        def: false,
      },
      _backgroundImage: {
        label: "Background Image",
        type: "relationship",
        withType: "@apostrophecms/image",
        if: { backgroundImageEnabled: true },
        max: 1,
      },
      backgroundColorScheme: {
        label: "Background Color Scheme",
        type: "select",
        required: true,
        def: "none",
        choices: ["none", "solid"].map((value) => ({ label: value, value })),
      },
      backgroundColor: {
        label: "Background Color",
        type: "color",
        if: { backgroundColorScheme: "solid" },
        options: {
          pickerOptions: colorPickerOptions(),
        },
      },
    };
  },

  styles(apos, widget) {
    const backgroundParts = [];
    const style = {};

    const backgroundImage =
      widget.backgroundImageEnabled && apos.attachment.first(widget._backgroundImage);
    if (backgroundImage) {
      backgroundParts.push(`url(${JSON.stringify(apos.attachment.url(backgroundImage))})`);
      Object.assign(style, {
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-size": "cover",
      });
    }

    if (widget.backgroundColorScheme === "solid" && widget.backgroundColor) {
      if (backgroundParts.length === 0) {
        Object.assign(style, { "background-color": widget.backgroundColor });
      } else {
        backgroundParts.unshift(
          `linear-gradient(${widget.backgroundColor}, ${widget.backgroundColor})`,
        );
      }
    }

    return {
      ...(backgroundParts.length > 0 && { background: backgroundParts.filter(Boolean).join(", ") }),
      ...style,
    };
  },
};

module.exports = {
  styleFieldSet,
};
