# api-error

API Error

```
npm install @yo1dog/api-error
```

## Quick Start

```javascript
const APIError = require('@yo1dog/api-error');

new APIError(404, `Document with id '${id}' does not exist.`);
```


# Docs

## `new APIError(status, [message, [{code?, details?}]])`

 param    | type   | description
----------|--------|-------------
`status`  | number | Status code.
`message` | string | A human-readable description of the error.
`code`    | string | Error code.


-----

## `APIError.status`

## `APIError.message`

## `APIError.code`
