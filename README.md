# Usage
[![](https://img.shields.io/npm/v/nric.svg?style=flat)](https://github.com/markeyys/npm-sg-carplate)
[![](https://img.shields.io/bundlephobia/min/nric.svg?style=flat)](https://github.com/markeyys/npm-sg-carplate)

Npm package library to validate and generate Singapore carplate Number

## Install

`$ npm install sg-carplate`

```
const carplate = require('sg-carplate');

carplate.validate('SBS9889U') // true
carplate.validate('SBS1234A') // false
carplate.generate() // eg. SKD4533B
```

## License

MIT
