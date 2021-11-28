const lodash = require("lodash");
const { getBoxStyle } = require("../../lib/field-sets/box-style");
const { getBackgroundStyle } = require("../../lib/field-sets/background-style");
const { getTextFontOptions, getTextStyle } = require("../../lib/field-sets/text-style");
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
      getBoxStyle,
      getBackgroundStyle,
      getTextFontOptions,
      getTextStyle,
      ...columnsWidgetHelpers,
    });
  },
};
