module.exports = {
  extend: "@apostrophecms/piece-type",
  options: {
    label: "Topic",
    pluralLabel: "Topics",
    slugPrefix: "topic-",
    sort: { order: 1 },
    autopublish: true,
    quickCreate: false,
  },
  fields: {
    add: {
      order: {
        label: "Order",
        help: 'Used to sort topics. Items with lower "order" appear first.',
        type: "integer",
      },
    },
    group: {
      basics: {
        label: "Basics",
        fields: ["title", "order"],
      },
    },
  },
  columns: {
    add: {
      order: { label: "Order" },
    },
    order: ["title", "order", "updatedAt"],
  },
};
