# string-snapshot-serializer

[![Build Status](https://travis-ci.com/akameco/string-snapshot-serializer.svg?branch=master)](https://travis-ci.com/akameco/string-snapshot-serializer)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> serializer for string escape

## Install

```
$ npm install string-snapshot-serializer
```

## Usage

```ts
import { getSnapshotSerializer } from 'string-snapshot-serializer'

expect.addSnapshotSerializer(getSnapshotSerializer())
```

```
before:
exports[`snapshot`] = `"test \\"unicorn\\""`;

after:
exports[`snapshot`] = `test "unicorn"`;
```

...or add it globally to your jest config:

```js
// jest.config.js
module.exports = {
  snapshotSerializers: [
    require.resolve('string-snapshot-serializer/serializer.js'),
  ],
}
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/string-snapshot-serializer/commits?author=akameco "Code") [📖](https://github.com/akameco/string-snapshot-serializer/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/string-snapshot-serializer/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
