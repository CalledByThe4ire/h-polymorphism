import path from 'path';
import fs from 'fs';
import JsonParser from './parsers/JsonParser';
import YamlParser from './parsers/YamlParser';
import Config from './Config';

// BEGIN (write your solution here)
const mapping = (str) => {
  switch (str) {
    case 'json':
      return data => new JsonParser(data);
    case 'yaml':
    case 'yml':
      return data => new YamlParser(data);
    default:
      return data => new JsonParser(data);
  }
};

export default class {
  static factory(filePath) {
    const extension = path.extname(filePath).slice(1);
    const data = fs.readFileSync(filePath);
    const parser = mapping(extension)(data);
    const config = parser.parse();
    return new Config(config);
  }
}
// END
