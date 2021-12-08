module.exports = {
  options: {
    types: [
      {
        name: "default-page",
        label: "Default",
      },
      {
        name: "@apostrophecms/home-page",
        label: "Home",
      },
      {
        name: "section-preview-page",
        label: "Section Preview",
      },
    ],
    minimumPark: [
      {
        slug: "/",
        parkedId: "home",
        type: "@apostrophecms/home-page",
        title: "Home",
        visibility: "public",
        orphan: false,
      },
      {
        slug: "/section-preview",
        parkedId: "section-preview",
        type: "section-preview-page",
        title: "Section Preview",
        visibility: "loginRequired",
        orphan: true,
      },
    ],
  },
};
