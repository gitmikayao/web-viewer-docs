# Error
This plugin add a namespace `Error` to the instance of DVS. The `Error` object to be used to manage the error message and error code of DVS.

## Usage
```js
import dvsError from 'xxx';
import DVS from 'xxx';

// use plugin
DVS.use(dvsError);

// initialize DVS
const dvs = new DVS({
    // ... config
})
```
**See also:** [Using a Plugin](./README.md#using-a-plugin)

## API
### errorMessage
- **Description:** Get the last error message.
- **Type:** `{ string }`
- **Default:** `ok.`
- **Usage:**
```js
const msg = dvsInstance.Error.errorMessage
console.log(msg); // "ok."
```

### errorMessage
- **Description:** Get the last error message.
- **Type:** `{ number }`
- **Default:** `0`
- **Usage:**
```js
const code = dvsInstance.Error.errorCode
console.log(code); // 0
```