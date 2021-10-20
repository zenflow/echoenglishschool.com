const { linkHelpers } = require('../../lib/link');

module.exports = {
  options: {
    alias: 'helper'
  },
  init(self) {
    self.addHelpers({
      ...linkHelpers
    });
  }
};
