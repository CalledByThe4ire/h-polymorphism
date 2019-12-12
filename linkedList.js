import Node from './Node';

const reverse = (list) => {
  const iter = (acc, items) => {
    if (items === null) {
      return acc;
    }
    const newAcc = new Node(items.getValue(), acc);
    return iter(newAcc, items.getNext());
  };
  return iter(null, list);
};

export default reverse;
