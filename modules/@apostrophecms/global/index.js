module.exports = {
  fields: {
    add: {
      siteTitle: {
        label: "Site Title",
        type: "string",
        def: "ECHO English School",
      },
    },
    group: {
      general: {
        label: "General",
        fields: ["siteTitle"],
      },
    },
  },
};
