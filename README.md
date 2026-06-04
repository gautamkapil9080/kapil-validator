# kapil-validator Version V1

A simple validation package made using Node.js.

## Features

* Validate Email
* Validate Indian Phone Number
* Validate Name

## Installation

```bash
npm install kapil-validator
```

## Usage

```js
const validator = require("kapil-validator");

console.log(validator.isEmail("kapil@gmail.com"));

console.log(validator.isIndianPhone("9876543210"));

console.log(validator.isName("Kapil"));
```

## Functions

### isEmail()

Checks whether email is valid or not.

### isIndianPhone()

Checks whether Indian phone number is valid or not.

### isName()

Checks whether name is valid or not.

## Author
kapil
