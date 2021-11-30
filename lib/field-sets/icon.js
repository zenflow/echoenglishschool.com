function getIconField({ required = false, def = "" } = {}) {
  return {
    htmlHelp: `
Find icon names <a target="_blank" href="//fontawesome.com/v5.15/icons?d=gallery&p=2&m=free">by search</a>
or <a target="_blank" href='//fontawesome.com/v5/cheatsheet/free/solid'>by cheatsheet</a>.
<em><strong>Important</strong> You should also include the name of the icon set
(<strong>solid</strong>, <strong>regular</strong>, or <strong>brands</strong>)
separated with a space. If not provided, this defaults to <strong>solid</strong></em>`,
    type: "string",
    required,
    def,
  };
}

const iconSets = { solid: "fas", regular: "far", brands: "fab" };

function getIconFieldClasses(value) {
  if (!value) return "";
  let [name, setName] = value.toLowerCase().split(" ");
  if (Object.keys(iconSets).includes(name)) {
    [setName, name] = [name, setName];
  }
  setName = setName || "solid";
  return `${iconSets[setName]} fa-${name}`;
}

module.exports = {
  getIconField,
  getIconFieldClasses,
};
