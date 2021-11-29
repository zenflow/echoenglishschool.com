const lodash = require("lodash");
const { getStyleFieldSetStyles } = require("../../lib/field-sets/style/index");
const { getTextFontOptions } = require("../../lib/field-sets/style/text");
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
      getStyleFieldSetStyles,
      getTextFontOptions,
      ...columnsWidgetHelpers,
    });
  },
};
