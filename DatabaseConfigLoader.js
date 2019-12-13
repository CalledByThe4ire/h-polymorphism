import fs from 'fs';
import path from 'path';
import _ from 'lodash';

// BEGIN (write your solution here)
export default class {
  constructor(pathToConfigs) {
    this.pathToConfigs = pathToConfigs;
  }

  load(env) {
    const config = JSON.parse(
      fs.readFileSync(
        path.join(this.pathToConfigs, `database.${env}.json`),
        'utf8',
      ),
    );
    if (Object.keys(config).includes('extend')) {
      const { extend, ...rest } = config;
      const extendedConfig = JSON.parse(
        fs.readFileSync(
          path.join(this.pathToConfigs, `database.${extend}.json`),
          'utf8',
        ),
      );
      return { ...extendedConfig, ...rest };
    }
    return config;
  }
}
// END
