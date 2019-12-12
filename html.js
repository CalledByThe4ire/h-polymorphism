/* eslint-disable no-unused-vars */
import _ from 'lodash';

// BEGIN (write your solution here)

const acceptableTagsList = new Set(['a', 'link', 'img']);
const acceptableTagsAttrs = {
  a: 'href',
  link: 'href',
  img: 'src',
};

export default tags => {
  const filtered = tags.filter(({ name }) => acceptableTagsList.has(name));
  const mapped = filtered.map(value => {
    const { name } = value;
    const attr = acceptableTagsAttrs[name];
    return value[attr];
  });
  return mapped;
};
// END
