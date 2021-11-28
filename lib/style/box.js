/*
TODO:
  - item horizontal & vertical alignment
  - boxMinimumHeight, boxMinimumWidth
  - boxBorderColor, boxBorderWidth, boxBorderRadius
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
  };
}

function getBoxStyle(apos, obj) {
  const boxMarginTop = obj.boxMarginTop || 0;
  const boxMarginBottom = obj.boxMarginBottom || 0;
  const boxPaddingX = obj.boxPaddingX || 0;
  const boxPaddingY = obj.boxPaddingY || 0;

  return Object.entries(getStyle())
    .map(([key, value]) => `${key}: ${value}; `)
    .join("");

  function getStyle() {
    const style = {
      margin: `${boxMarginTop}rem 0 ${boxMarginBottom}rem 0`,
      padding: `${boxPaddingY}rem ${boxPaddingX}rem`,
    };
    return style;
  }
}

module.exports = {
  getBoxStyleFields,
  getBoxStyle,
};
