const lodash = require("lodash");
const { getStyleFieldSetStyles } = require("../../lib/field-sets/style/index");
const { getTextFontOptions } = require("../../lib/field-sets/style/text");
const { getIconFieldClasses } = require("../../lib/field-sets/icon");
const columnsWidgetHelpers = require("../columns-widget/helpers");
const fancyListWidgetHelpers = require("../fancy-list-widget/helpers");

module.exports = {
  options: {
    alias: "helper",
  },
  init(self) {
    self.addHelpers({
      jsonStringify(o) {
        return JSON.stringify(o);
      },
      isDev() {
        return process.env.NODE_ENV !== "production";
      },
      getStyleFieldSetStyles,
      getTextFontOptions,
      getIconFieldClasses,
      ...columnsWidgetHelpers,
      ...fancyListWidgetHelpers,
    });
  },
};
