function getLinksField() {
  return {
    type: "array",
    titleField: "text",
    fields: {
      add: {
        text: {
          type: "string",
          required: true,
        },
        url: {
          type: "string",
          required: true,
        },
        openLinkInNewWindow: {
          type: "boolean",
          def: false,
        },
      },
    },
  };
}

module.exports = {
  fields: {
    add: {
      siteTitle: {
        label: "Site Title",
        type: "string",
        def: "ECHO English School",
      },
      footerBlurbTitle: {
        type: "string",
        def: "ECHO English School",
      },
      footerBlurbContent: {
        type: "area",
        options: {
          max: 1,
          widgets: {
            "@apostrophecms/rich-text": {},
          },
        },
      },
      footerLinkLists: {
        type: "array",
        titleField: "title",
        fields: {
          add: {
            title: {
              type: "string",
              required: true,
            },
            links: getLinksField(),
          },
        },
      },
      footerCopyright: {
        type: "string",
        def: "© ECHO English School, All Right Reserved",
      },
      footerLegalLinks: getLinksField(),
    },
    group: {
      general: {
        label: "General",
        fields: ["siteTitle"],
      },
      footer: {
        label: "Footer",
        fields: [
          "footerBlurbTitle",
          "footerBlurbContent",
          "footerLinkLists",
          "footerCopyright",
          "footerLegalLinks",
        ],
      },
    },
  },
};
