### ConfigFactory.js

Создайте фабрику, которая принимает на вход путь до файла конфигурации в формате либо *json* либо *yaml* и возвращает объект класса *Config*. Конструктор класса *Config* принимает на вход объект с данными, полученными из конфигурационных файлов и предоставляет к нему доступ с помощью метода *getValue*.

```
import path from 'path';
import ConfigFactory from '../ConfigFactory';

const filePath = path.join(__dirname, '__fixtures__', 'test.yml');
const config = ConfigFactory.factory(filePath);
config.getValue('key'); // value
console.log(config.constructor.name); // Config

```

Учтите что файлы формата YAML могут иметь разные расширения: *yaml* и *yml*. Фабрика должна работать с обоими.

### parsers/JsonParser.js

Реализуйте класс, отвечающий за парсинг *json*. Используйте внутри `JSON.parse`.

### parsers/YamlParser.js

Реализуйте класс, отвечающий за парсинг *yaml*. Для парсинга используется сторонний компонент [js-yaml](https://github.com/nodeca/js-yaml#js-yaml---yaml-12-parser--writer-for-javascript). Используйте метод `safeLoad`.

### Подсказки

-   Получить расширение файла можно с помощью [path.extname](https://nodejs.org/dist/latest-v10.x/docs/api/path.html#path_path_extname_path)
-   Для чтения файлов используйте [fs.readFileSync](https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_readfilesync_path_options)