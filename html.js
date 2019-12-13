const buildAttrs = tag => {
  const excluded = ['name', 'tagType', 'body'];
  return Object.keys(tag)
    .filter(attr => !excluded.includes(attr))
    .map(attr => ` ${attr}="${tag[attr]}"`)
    .join('');
};

const mapping = {
  single: tag => {
    const attrs = buildAttrs(tag);
    return `<${tag.name}${attrs}>`;
  },
  pair: tag => {
    const attrs = buildAttrs(tag);
    return `<${tag.name}${attrs}>${tag.body}</${tag.name}>`;
  },
};

const stringify = tag => {
  const build = mapping[tag.tagType];
  return build(tag);
};

export default stringify;
