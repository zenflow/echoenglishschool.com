const { schemes } = require("./schemes");
module.exports = {
  isColumnShown(widget, index) {
    return index < schemes[widget.scheme].length;
  },
  getColumnClass(widget, index) {
    const size = schemes[widget.scheme][index];
    const sizeClass = `col-${widget.breakpoint ? `${widget.breakpoint}-` : ""}${size}`;
    const justify = widget[`column${index + 1}ContentJustify`];
    const justifyClass = `column-content-justify--${justify}`;
    return `${sizeClass} ${justifyClass}`;
  },
  getColumnsStyle(widget) {
    const style = {};
    if (widget.minHeight) {
      Object.assign(style, { "min-height": `${widget.minHeight}rem` });
    }
    return Object.entries(style)
      .map(([key, value]) => `${key}: ${value}; `)
      .join("");
  },
};
