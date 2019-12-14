import _ from 'lodash';
// BEGIN (write your solution here)
export default (obj) => {
  const data = obj;
  data.filepath = _.invert(data.filepath);
  return obj;
};
// END
