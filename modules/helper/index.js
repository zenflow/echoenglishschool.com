const { linkHelpers } = require("../../lib/link");

module.exports = {
  options: {
    alias: "helper",
  },
  init(self) {
    self.addHelpers({
      ...linkHelpers,
      jsonStringify(o) {
        return JSON.stringify(o);
      },
      isDev() {
        return process.env.NODE_ENV !== "production";
      },
      getPageAncestry(data) {
        const items = [...data.page._ancestors, data.page];
        if (data.piece) {
          items.push(data.piece);
        }
        return items;
      },
    });
  },
};
