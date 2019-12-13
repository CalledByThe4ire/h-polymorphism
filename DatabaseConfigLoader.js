import fs from 'fs';
import path from 'path';
import _ from 'lodash';

// BEGIN (write your solution here)
export default class {
  constructor(pathToConfigs) {
    this.pathToConfigs = pathToConfigs;
  }

  load(env) {
    const fileName = `database.${env}.json`;
    const filePath = path.join(this.pathToConfigs, fileName);
    const raw = fs.readFileSync(filePath);
    const config = JSON.parse(raw);

    if (!config.extend) {
      return config;
    }

    const newEnv = config.extend;
    const configWithoutExtend = _.omit(config, 'extend');

    return { ...this.load(newEnv), ...configWithoutExtend };
  }
}
// END
