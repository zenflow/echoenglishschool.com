const lodash = require("lodash");
const { getBackgroundStyle } = require("../../lib/style/background");
const { getTextStyle } = require("../../lib/style/text");
const { getBoxStyle } = require("../../lib/style/box");
const columnsWidgetHelpers = require("../columns-widget/helpers");

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
      getBackgroundStyle,
      getTextStyle,
      getBoxStyle,
      ...columnsWidgetHelpers,
    });
  },
};
