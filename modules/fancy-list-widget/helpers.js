module.exports = {
  getFancyListStyle(widget) {
    const style = {
      "--my-icon-size": `${widget.iconSize}rem`,
      "--my-icon-color": widget.iconColor || `var(--my-text-color)`,
    };
    return Object.entries(style)
      .map(([key, value]) => `${key}: ${value}; `)
      .join("");
  },
  getFancyListItemClass(widget, index) {
    const classes = [];
    if (widget.numberOfColumns > 1) {
      classes.push(
        `col-${widget.breakpoint ? `${widget.breakpoint}-` : ""}${12 / widget.numberOfColumns}`,
      );
    }
    return classes.join(" ");
  },
};
