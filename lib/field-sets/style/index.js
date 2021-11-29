const sets = {
  margin: require("./margin").styleFieldSet,
  box: require("./box").styleFieldSet,
  background: require("./background").styleFieldSet,
  text: require("./text").styleFieldSet,
};

function getStyleFieldSetFields(name, { def = {} } = {}) {
  const fields = sets[name].fields();
  for (const [key, value] of Object.entries(def)) {
    fields[key].def = value;
  }
  return fields;
}

function getStyleFieldSetStyles(apos, widget, names) {
  const styles = {};
  for (const name of names) {
    Object.assign(styles, sets[name].styles(apos, widget));
  }
  return Object.entries(styles)
    .map(([key, value]) => `${key}: ${value}; `)
    .join("");
}

module.exports = {
  getStyleFieldSetFields,
  getStyleFieldSetStyles,
};
