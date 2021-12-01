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
      backgroundImageTiled: {
        help: "If enabled, the image will be repeated instead of enlarged to cover the element space",
        type: "boolean",
        if: { backgroundImageEnabled: true },
        def: false,
      },
      backgroundColorScheme: {
        type: "select",
        required: true,
        def: "none",
        choices: ["none", "solid"].map((value) => ({ label: value, value })),
      },
      backgroundColor: {
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
        "background-size": widget.backgroundImageTiled ? "auto" : "cover",
        "background-repeat": widget.backgroundImageTiled ? "repeat" : "no-repeat",
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
