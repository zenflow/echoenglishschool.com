module.exports = {
  options: {
    className: "bp-rich-text-widget",
    defaultOptions: {
      toolbar: [
        "styles",
        "|",
        "bold",
        "italic",
        "underline",
        "strike",
        "link",
        // "highlight", // TODO: style <mark> element
        // "|",
        // "alignLeft",
        // "alignCenter",
        // "alignRight",
        "|",
        "bulletList",
        "orderedList",
        // "blockquote", // TODO: style <blockquote> element
        // "|",
        // "horizontalRule", // TODO: style <hr> element
      ],
      styles: [
        {
          tag: "p",
          label: "Paragraph (P)",
        },
        {
          tag: "h1",
          label: "Heading 1 (H1)",
        },
        {
          tag: "h2",
          label: "Heading 2 (H2)",
        },
        {
          tag: "h3",
          label: "Heading 3 (H3)",
        },
        {
          tag: "h4",
          label: "Heading 4 (H4)",
        },
      ],
    },
  },
};
