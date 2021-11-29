const styleFieldSet = {
  fields() {
    return {
      marginTop: {
        label: "Margin Top",
        htmlHelp: "Space to leave <strong>above</strong> this element",
        type: "float",
        def: 0,
      },
      marginBottom: {
        label: "Margin Bottom",
        htmlHelp: "Space to leave <strong>below</strong> this element",
        type: "float",
        def: 0,
      },
    };
  },
  styles(apos, widget) {
    return {
      "margin-top": `${widget.marginTop || 0}rem`,
      "margin-bottom": `${widget.marginBottom || 0}rem`,
    };
  },
};

module.exports = {
  styleFieldSet,
};
