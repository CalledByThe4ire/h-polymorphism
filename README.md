### html.js

Реализуйте и экспортируйте по умолчанию функцию `stringify(tag)`, которая принимает на вход тег и возвращает его текстовое представление. Например:

```
import stringify from './html';

const tag = {
  name: 'hr',
  class: 'px-3',
  id: 'myid',
  tagType: 'single',
};
const html = stringify(tag); // <hr class="px-3" id="myid">

const tag = {
  name: 'div',
  tagType: 'pair',
  body: 'text2',
  id: 'wow',
};
const html = stringify(tag); // <div id="wow">text2</div>

```

Внутри структуры тега есть три специальных ключа:

-   `name` - имя тега
-   `tagType` - тип тега, определяет его парность (pair) или одиночность (single)
-   `body` - тело тега, используется для парных тегов

Все остальное становится атрибутами тега и не зависит от того парный он или нет.