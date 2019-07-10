
# @tiaanduplessis/react-resize
[![package version](https://img.shields.io/npm/v/@tiaanduplessis/react-resize.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/react-resize)
[![package downloads](https://img.shields.io/npm/dm/@tiaanduplessis/react-resize.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/react-resize)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/@tiaanduplessis/react-resize.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/react-resize)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Little resize listener component

## Table of Contents

- [Usage](#usage)
- [Install](#install)
- [Contribute](#contribute)
- [License](#License)

## Usage

```js
import React from 'react'
import Resize, {Breakpoint} from '@tiaanduplessis/react-resize'

const Example = () => {
  return <main>
    <Resize>{
      ({ width, height }) => <div>{width} - {height}</div>
    }</Resize>

    <Breakpoint minWidth={500}>
      <h1>Hi</h1>
    </Breakpoint>

  </main>
}

export default Example

```


## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com).

```sh
$ npm install @tiaanduplessis/react-resize
$ # OR
$ yarn add @tiaanduplessis/react-resize
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT © [[object Object]]([object Object])
