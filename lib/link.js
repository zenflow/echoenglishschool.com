// TODO: <a download/> option for "file" & "custom" link types

const linkFields = {
  linkText: {
    label: 'Link Text',
    type: 'string',
    help: 'Leave blank to determine automatically'
  },
  linkType: {
    label: 'Link Type',
    type: 'select',
    choices: [
      {
        label: 'Page',
        value: 'page'
      },
      {
        label: 'File',
        value: 'file'
      },
      {
        label: 'Custom URL',
        value: 'custom'
      }
    ]
  },
  _linkPage: {
    label: 'Page to link',
    type: 'relationship',
    withType: '@apostrophecms/page',
    max: 1,
    builders: {
      project: {
        title: 1,
        _url: 1
      }
    },
    if: {
      linkType: 'page'
    }
  },
  _linkFile: {
    label: 'File to link',
    type: 'relationship',
    withType: '@apostrophecms/file',
    max: 1,
    if: {
      linkType: 'file'
    }
  },
  linkUrl: {
    label: 'URL for custom link',
    type: 'url',
    if: {
      linkType: 'custom'
    }
  },
  linkTarget: {
    label: 'Will the link open a new browser tab?',
    type: 'checkboxes',
    choices: [
      {
        label: 'Open in new tab',
        value: '_blank'
      }
    ]
  }
};

function getLinkHref (link) {
  if (!link) {
    return;
  }
  if (link.linkType === 'page' && link._linkPage && link._linkPage[0]) {
    return link._linkPage[0]._url;
  }
  if (link.linkType === 'file' && link._linkFile && link._linkFile[0]) {
    return link._linkFile[0]._url;
  }
  if (link.linkType === 'custom') {
    return link.linkUrl;
  }
}

function getLinkText (link) {
  if (!link) {
    return;
  }
  if (link.linkText) {
    return link.linkText;
  }
  if (link.linkType === 'page' && link._linkPage && link._linkPage[0]) {
    return link._linkPage[0].title;
  }
  if (link.linkType === 'file' && link._linkFile && link._linkFile[0]) {
    return link._linkFile[0].title;
  }
  if (link.linkType === 'custom') {
    return link.linkUrl;
  }
}

function getLinkHtml (link, options) {
  const quote = str => JSON.stringify(str);
  let html = `<a href=${quote(getLinkHref(link))}`;
  if (options.class) html += ` class=${quote(options.class)}`;
  if (link.linkTarget[0] === '_blank') html += ` target="_blank"`;
  html += `>${getLinkText(link)}</a>`;
  return html;
}

const linkHelpers = {
  getLinkHref,
  getLinkText,
  getLinkHtml
};

module.exports = {
  linkFields,
  linkHelpers
};
