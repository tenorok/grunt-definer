# grunt-definer

> Сборка definer-модулей

## Приступая к работе

Для работы этого плагина требуется Grunt `~0.4.1`.

Если вы не использовали [Grunt](http://gruntjs.com/) раньше, то можете ознакомиться с [вступительной инструкцией](http://gruntjs.com/getting-started), в которой объясняется, как добавить [Gruntfile](http://gruntjs.com/sample-gruntfile) в проект.

Установить этот плагин можно следующей командой:

```shell
npm install grunt-definer
```

После установки, можно будет подключить плагин в вашем Gruntfile:

```js
grunt.loadNpmTasks('grunt-definer');
```

## Использование

Для запуска сборки definer-модулей, достаточно выполнить команду: `grunt definer`.

Сборка осуществляется с помощью [Definer](https://github.com/tenorok/definer).

### Опции

#### target

Тип: `String`

_Обязательный_

Опция указывает путь до файла, в который будет сохранён результат.

#### directory

Тип: `String`

По умолчанию: `.`

Опция указывает откуда следует начать искать модули в файловой системе. Поиск модулей выполняется рекурсивно по всем вложенным директориям.

По умолчанию definer ищет модули в текущей директории.

#### postfix

Тип: `String`

По умолчанию: `js`

Опция задаёт постфикс файлов, в которых будет производиться поиск модулей.

#### module

Тип: `String` `Boolean`

По умолчанию: `false`

Опция позволяет указать имя модуля, для которого необходимо выполнить сборку. В результирующий файл попадут только те модули, которые необходимы для указанного модуля.

По умолчанию собираются все найденные модули.

#### verbose

Тип: `Array`

По умолчанию: `[]`

Опция настраивает вывод информации о сборке.

Информация делится на типы:

1. `log` — информация о процессе сборки (синим цветом)
2. `info` — сообщение о результате сборки (зелёным)
3. `warn` — предупреждения (жёлтым)
4. `error` — ошибки (красным)

По умолчанию выводятся все типы информации.
