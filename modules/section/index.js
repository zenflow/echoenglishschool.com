module.exports = {
  extend: "@apostrophecms/piece-type",
  options: {
    label: "Section",
    pluralLabel: "Sections",
    slugPrefix: "section-",
    sort: { order: 1, createdAt: 1 },
  },
  fields: {
    add: {
      slug: {
        label: "Slug",
        type: "slug",
        following: ["page", "title", "archived"],
        required: true,
      },
      page: {
        type: "select",
        required: true,
        choices: [{ label: "Home", value: "home" }],
      },
      order: {
        help: "Sections will be sorted according to this number, lowest to highest",
        type: "integer",
        def: 500,
      },
      isLinkInNavbar: {
        label: "Show link in navbar?",
        type: "boolean",
        def: false,
      },
      main: {
        label: "Content",
        type: "area",
        options: {
          widgets: {
            section: {},
          },
        },
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["page", "title", "order", "isLinkInNavbar"],
      },
      content: {
        label: "Content",
        fields: ["main"],
      },
    },
  },
  columns: {
    add: {
      order: {
        label: "Order",
      },
      isLinkInNavbar: {
        label: "Nav?",
      },
      visibility: {
        label: "Visibility",
      },
      previewLink: {
        component: "MyAposCellPreviewLink",
      },
    },
    order: ["title", "order", "isLinkInNavbar", "visibility", "updatedAt", "labels", "previewLink"],
  },
  handlers(self) {
    return {
      "@apostrophecms/page:serve": {
        async addSections(req) {
          req.data.sections = await self.apos.modules.section.find(req, {}).toArray();
        },
        async addNavLinks(req) {
          req.data.navLinks = req.data.sections
            .filter((section) => section.isLinkInNavbar)
            .map((section) => {
              let href = `#${self.apos.util.slugify(section.title)}`;
              // include path part only if not on home, enabling bootstrap scroll-spy on home
              if (req.originalUrl !== "/") href = `/${href}`;
              return { href, text: section.title };
            });
        },
      },
    };
  },
};
