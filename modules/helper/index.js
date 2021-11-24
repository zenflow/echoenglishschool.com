const lodash = require("lodash");

module.exports = {
  options: {
    alias: "helper",
  },
  init(self) {
    self.addHelpers({
      ...lodash,
      jsonStringify(o) {
        return JSON.stringify(o);
      },
      isDev() {
        return process.env.NODE_ENV !== "production";
      },
    });
  },
};
