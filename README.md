# conditional-class [![NPM version](https://img.shields.io/npm/v/conditional-class.svg?style=flat)](https://www.npmjs.com/package/conditional-class) [![NPM monthly downloads](https://img.shields.io/npm/dm/conditional-class.svg?style=flat)](https://npmjs.org/package/conditional-class) [![NPM total downloads](https://img.shields.io/npm/dt/conditional-class.svg?style=flat)](https://npmjs.org/package/iconditional-class) [![Build Status](https://travis-ci.com/hosseind88/conditional-class.svg?branch=main)](https://travis-ci.com/hosseind88/conditional-class)

> adds your conditional classnames to the base classname

Please follow me and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save conditional-class
```

## Usage

Works with strings or numbers.

```js
import { conditionalClass } from 'conditional-class';

console.log(condionalClass('some-class')); //=> some-class
console.log(condionalClass('some-class', { 'is-active': true })); //=> some-class is-active
console.log(condionalClass(undefined, { 'is-active': true })); //=> is-active
console.log(condionalClass(['class'], { 'is-active': true })); //=> class is-active
```

### License

Copyright © 2021, [Hossein Dindar](https://github.com/hosseind88).
Released under the [MIT License](LICENSE).
