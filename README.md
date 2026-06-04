# kapil-validator

A simple  validation package built using Node.js.

This package provides useful validation functions for checking:

* Email validation
* Indian phone number validation
* Name validation

More validation features and improvements will be added in future updates.

---

## Installation

```bash id="8e5shy"
npm install kapil-validator
```

---

## Usage

```js id="xw6x9m"
const validator = require("kapil-validator");

console.log(validator.isEmail("kapil@gmail.com"));

console.log(validator.isIndianPhone("9876543210"));

console.log(validator.isName("Kapil"));
```

---

## Available Functions

### isEmail(email)

Checks whether the given email format is valid or not.

#### Example

```js id="7hh2om
validator.isEmail("kapil@gmail.com");
```

Returns:

```js id="zq7w5w"
true
```

---

### isIndianPhone(number)

Checks whether the given phone number is a valid Indian mobile number.

Validation includes:

* Must contain 10 digits
* Must start from 6, 7, 8, or 9

#### Example

```js id="y1ngsl"
validator.isIndianPhone("9876543210");
```

Returns:

```js id="tww6hr"
true
```

---

### isName(name)

Checks whether the given name is valid.

Validation includes:

* Name should not be numeric
* Minimum length should be greater than 1

#### Example

```js id="8pj0j0"
validator.isName("Kapil");
```

Returns:

```js id="i5jq3n"
true
```

---

## Future Updates

More validations and improvements are coming soon, including:

* Strong password validation
* URL validation
* Username validation
* Empty string checks
* Regex-based advanced validations
* Better edge-case handling

---

## Author

Kapil Gautam

---

## License

MIT
