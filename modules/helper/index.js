const lodash = require("lodash");
const { linkHelpers } = require("../../lib/link");

module.exports = {
  options: {
    alias: "helper",
  },
  init(self) {
    self.addHelpers({
      ...lodash,
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
      formatDateForHuman(input) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(input).toLocaleDateString(undefined, options);
      },
    });
  },
};
