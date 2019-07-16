const clean = values => {
  Object.keys(values).forEach(key => {
    (values[key] === null || values[key] === "") && delete values[key];
  });
};

const cleanup = name => {
  return name
    .trim()
    .replace(/\s/g, "_")
    .toLowerCase();
};

const getMark = name => {
  const re = /(?:\.([^.]+))?$/;
  return re.exec(name);
};

export { clean, cleanup, getMark };
