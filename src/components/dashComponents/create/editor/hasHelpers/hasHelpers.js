const hasLinks = value => {
  return value.inlines.some(inline => inline.type === "link");
};

const hasBlock = (value, type) => {
  return value.blocks.some(node => node.type === type);
};

export { hasLinks, hasBlock };
