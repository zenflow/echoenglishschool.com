const { schemes } = require("./schemes");
module.exports = {
  isColumnShown(widget, index) {
    return index < schemes[widget.scheme].length;
  },
  getColumnClass(widget, index) {
    const size = schemes[widget.scheme][index];
    const sizeClass = `col-${widget.breakpoint ? `${widget.breakpoint}-` : ""}${size}`;
    const position = widget[`column${index + 1}ContentPosition`];
    const positionClass = `column-content-position--${position}`;
    return `${sizeClass} ${positionClass}`;
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
