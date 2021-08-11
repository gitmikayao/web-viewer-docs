# Log
This plugin add a namespace `Log` to the instance of DVS. The `Log` object to be used to manage the log messages.

## Usage
```js
import dvsLog from 'xxx';
import DVS from 'xxx';

// use plugin
DVS.use(dvsLog);

// initialize DVS
const dvs = new DVS({
    // ... config
})
```
**See also:** [Using a Plugin](./README.md#using-a-plugin)

## API
### clear()
- **Description:** Clear the logs.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const log = dvsInstance.Log.clear();
```
### allowLog
- **Description:** Enable collect the logs of DVS or not.
- **Type:** `{ boolean }`
- **Default:** true
- **Usage:**
```js
// disable collect the logs
dvsInstance.Log.allowLog = false;

// enable collect the logs
dvsInstance.Log.allowLog = true;
```

### logs
- **Description:** An array of logs.
- **Type:** `{ Array<Object> }`
- **Default:** []
- **Usage:**
```js
const logs = dvsInstance.Log.logs;
const.log(logs); // [logObject1, ...]
```