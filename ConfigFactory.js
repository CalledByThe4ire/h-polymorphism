import path from 'path';
import fs from 'fs';
import JsonParser from './parsers/JsonParser';
import YamlParser from './parsers/YamlParser';
import Config from './Config';

// BEGIN (write your solution here)
const mapping = {
  yaml: YamlParser,
  yml: YamlParser,
  json: JsonParser,
};

export default class ConfigFactory {
  static factory(filePath) {
    const type = path.extname(filePath).slice(1);
    const parser = new mapping[type]();

    const rawData = fs.readFileSync(filePath).toString();
    const data = parser.parse(rawData);

    return new Config(data);
  }
}
// END
