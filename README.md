# api-error

API Error

## Quick Start

```javascript
const APIError = require('@yo1dog/api-error');

new APIError(404, `Document with id '${id}' does not exist.`);
```


# Docs

## `new APIError(status, message, [{[code], [details]}])`

 param    | type   | description
----------|--------|-------------
`status`  | number | Status code.
`message` | string | A human-readable description of the error.
`code`    | string | Error code.


-----

## `CError.status`

## `CError.message`

## `CError.code`
