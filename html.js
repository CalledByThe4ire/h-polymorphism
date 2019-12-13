// BEGIN (write your solution here)
const createAttrs = ({ class: className = '', id = '', randomAttr = '' }) => {
  const classAttr = className !== '' ? ` class="${className}"` : '';
  const idAttr = id !== '' ? ` id="${id}"` : '';
  const rand = randomAttr !== '' ? ` randomAttr="${randomAttr}"` : '';
  return `${classAttr}${idAttr}${rand}`;
};
const mapping = {
  pair: ({ name, body, ...rest }) => {
    const attrs = createAttrs(rest);
    return `<${name}${attrs}>${body}</${name}>`;
  },
  single: ({ name, ...rest }) => {
    const attrs = createAttrs(rest);
    return `<${name}${attrs}>`;
  },
};

export default tag => {
  const { tagType } = tag;
  return mapping[tagType](tag);
};
// END
