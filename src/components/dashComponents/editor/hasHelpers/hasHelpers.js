const hasLinks = (value, type) => {
  return value.inlines.some(inline => inline.type === type);
};
const hasInline = (value, type) => {
  return value.inlines.some(inline => inline.type === type);
};

const hasBlock = (value, type) => {
  return value.blocks.some(node => node.type === type);
};

const hasMark = (value, type) => {
  return value.activeMarks.some(mark => mark.type === type);
};

export { hasLinks, hasBlock, hasMark, hasInline };
