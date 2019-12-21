Адаптер -- популярный шаблон проектирования. Он используется тогда, когда нужно использовать код, не поддерживающий необходимый интерфейс. В такой ситуации, создается "обертка" над необходимым кодом, которая поддерживает нужный интерфейс. Это очень похоже на адаптеры электронных устройств в реальной жизни.

В текущем задании, есть код отвечающий за генерацию паролей, он находится в классе *PasswordBuilder*. Для генерации паролей, этот класс использует внешний объект.

Суть данного задания, внедрить в эту систему внешнюю библиотеку.

Обратите внимание на то, что задача решается не через исправление кода самой библиотеки, а за счет создания адаптера, благодаря которому соединяется код задания и код библиотеки.

### PasswordGeneratorAdapter.js

Реализуйте класс *PasswordGeneratorAdapter*, который представляет собой адаптер к пакету [generate-password](https://github.com/brendanashworth/generate-password).

```
import PasswordBuilder from '../PasswordBuilder';
import PasswordGeneratorAdapter from '../PasswordGeneratorAdapter';

const builder = new PasswordBuilder(new PasswordGeneratorAdapter());

// Первый параметр длина пароля (setLength в генераторе)
// Второй, набор опций
// Для настройки генератора смотрите официальную документацию https://github.com/brendanashworth/generate-password
const passwordInfo = builder.buildPassword(10, ['upperCase', 'numbers']);
// {
//    password: '9G/y{JYY',
//    digest: 'aee5e4e6a6cc1fdd77e5669ee49cbcd3ff7e1803',
// }

```

Вторым параметром в `buildPassword` передается набор опций:

-   uppercase
-   numbers
-   symbols

Каждая из этих опций, соответствует опциям внутри библиотеки *generate-password*. В [официальной документации](https://github.com/brendanashworth/generate-password#usage) видно как их можно установить. Значение по умолчанию для данных опций, должно быть false.

### Подсказки

-   [Адаптер](https://ru.wikipedia.org/wiki/%D0%90%D0%B4%D0%B0%D0%BF%D1%82%D0%B5%D1%80_(%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F))