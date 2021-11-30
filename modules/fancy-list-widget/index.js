const { getStyleFieldSetFields } = require("../../lib/field-sets/style");
const { colorPickerOptions } = require("../../lib/colorPickerOptions");
const { getIconField } = require("../../lib/field-sets/icon");

const itemElementsOptions = ["icon+heading+body", "icon+heading", "icon+body", "heading+body"];

const ifItemElementIncludes = (element) => ({
  $or: itemElementsOptions
    .filter((option) => option.split("+").includes(element))
    .map((option) => ({ itemElements: option })),
});

module.exports = {
  extend: "@apostrophecms/widget-type",
  options: {
    label: "Fancy List",
  },
  fields: {
    add: {
      itemElements: {
        help: "Which elements will be visible for each item",
        type: "select",
        required: true,
        def: itemElementsOptions[0],
        choices: itemElementsOptions.map((value) => ({ label: value, value })),
      },
      items: {
        type: "array",
        min: 1,
        titleField: "heading",
        fields: {
          add: {
            icon: getIconField(),
            heading: {
              type: "string",
            },
            body: {
              type: "area",
              options: {
                max: 1,
                widgets: {
                  "@apostrophecms/rich-text": {},
                },
              },
            },
          },
        },
      },
      numberOfColumns: {
        type: "integer",
        required: true,
        min: 1,
        max: 4,
        def: 1,
      },
      breakpoint: {
        label: "Responsive Breakpoint",
        help: "When the display width is smaller than this, columns won't be used. Instead, list items will be full screen width & shown one above the other.",
        type: "select",
        required: true,
        def: "md",
        choices: [
          { label: "None", value: "" },
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
        ],
      },
      defaultIcon: getIconField({ required: true, def: "solid check" }),
      iconSize: {
        type: "float",
        if: ifItemElementIncludes("icon"),
        required: true,
        min: 1,
        max: 5,
        def: 2,
      },
      iconColor: {
        help: "If this isn't set, the font color will be used",
        type: "color",
        if: ifItemElementIncludes("icon"),
        options: {
          pickerOptions: colorPickerOptions(),
        },
      },
      iconCircles: {
        if: ifItemElementIncludes("icon"),
        type: "boolean",
        def: false,
      },
      ...getStyleFieldSetFields("margin"),
    },
  },
};
