/* eslint-disable no-unused-vars */
import _ from 'lodash';

// BEGIN (write your solution here)

const mapping = {
  a: 'href',
  img: 'src',
  link: 'href',
};

const getLinks = tags => {
  const filteredTags = tags.filter(tag => _.has(mapping, tag.name));
  const paths = filteredTags.map(tag => tag[mapping[tag.name]]);

  return paths;
};

export default getLinks;
// END
