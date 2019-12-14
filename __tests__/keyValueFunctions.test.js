import InMemoryKV from '../InMemoryKV';
import swapKeyValue from '../keyValueFunctions';

it('swapKeyValue', () => {
  const map = new InMemoryKV({ key: 10 });
  map.set('key2', 'value2');
  swapKeyValue(map);

  expect(map.get('key')).toBeNull();
  expect(map.get(10)).toBe('key');
  expect(map.get('value2')).toBe('key2');
});
