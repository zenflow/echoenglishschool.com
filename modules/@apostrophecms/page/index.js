module.exports = {
  options: {
    types: [
      {
        name: "default-page",
        label: "Default",
      },
    ],
    park: [
      {
        parkedId: "blogParkedId",
        type: "article-page",
        _defaults: {
          slug: "/blog",
          title: "Blog",
        },
      },
    ],
  },
};
