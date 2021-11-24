const lodash = require("lodash");
const { getBackgroundStyle } = require("../../lib/style/background");
const { getTextStyle } = require("../../lib/style/text");

module.exports = {
  options: {
    alias: "helper",
  },
  init(self) {
    self.addHelpers({
      ...lodash,
      getBackgroundStyle,
      getTextStyle,
      jsonStringify(o) {
        return JSON.stringify(o);
      },
      isDev() {
        return process.env.NODE_ENV !== "production";
      },
    });
  },
};
