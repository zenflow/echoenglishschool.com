/*
TODO:
  - boxBorderColor, boxBorderWidth
  - box shadow
*/

function getBoxStyleFields() {
  return {
    boxMarginTop: {
      label: "Box Margin Top",
      type: "float",
      def: 0,
    },
    boxMarginBottom: {
      label: "Box Margin Bottom",
      type: "float",
      def: 0,
    },
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
}

function getBoxStyle(apos, obj) {
  return Object.entries(getStyle())
    .map(([key, value]) => `${key}: ${value}; `)
    .join("");

  function getStyle() {
    const style = {
      margin: `${obj.boxMarginTop || 0}rem 0 ${obj.boxMarginBottom || 0}rem 0`,
      padding: `${obj.boxPaddingY || 0}rem ${obj.boxPaddingX || 0}rem`,
      "align-self": obj.boxAlignment,
      "border-radius": `${obj.boxCornerRadius || 0}rem`,
    };
    return style;
  }
}

module.exports = {
  getBoxStyleFields,
  getBoxStyle,
};
