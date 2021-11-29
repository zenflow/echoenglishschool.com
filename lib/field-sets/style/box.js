/*
TODO:
  - boxBorderColor, boxBorderWidth
  - box shadow
*/

const styleFieldSet = {
  fields() {
    return {
      boxPaddingX: {
        label: "Box Padding Horizontal",
        type: "float",
        def: 1,
      },
      boxPaddingY: {
        label: "Box Padding Vertical",
        type: "float",
        def: 1,
      },
      boxAlignment: {
        label: "Box Alignment",
        type: "select",
        required: true,
        def: "stretch",
        choices: ["stretch", "center", "start", "end"].map((value) => ({ label: value, value })),
      },
      boxCornerRadius: {
        label: "Box Corner Radius",
        type: "float",
        def: 0,
      },
    };
  },
  styles(apos, widget) {
    return {
      "padding-top": `${widget.boxPaddingY || 0}rem`,
      "padding-bottom": `${widget.boxPaddingY || 0}rem`,
      "padding-left": `${widget.boxPaddingX || 0}rem`,
      "padding-right": `${widget.boxPaddingX || 0}rem`,
      "align-self": widget.boxAlignment,
      "border-radius": `${widget.boxCornerRadius || 0}rem`,
    };
  },
};

module.exports = {
  styleFieldSet,
};
