const { linkFields } = require('../../../lib/link');

module.exports = {
  fields: {
    add: {
      footerLinks: {
        label: 'Footer Links',
        type: 'array',
        titleField: 'linkText',
        fields: {
          add: { ...linkFields }
        }
      }
    },
    group: {
      general: {
        label: 'General',
        fields: [ 'footerLinks' ]
      }
    }
  }
};
