function defaultWidgets({ exclude = [] } = {}) {
  let config = {
    "@apostrophecms/rich-text": {},
    "@apostrophecms/image": {},
    "@apostrophecms/video": {},
    columns: {},
    container: {},
  };
  for (const name of exclude) {
    delete config[name];
  }
  return config;
}

module.exports = { defaultWidgets };
