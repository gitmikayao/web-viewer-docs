# Thumbnail
This plugin extends the Viewer class and add thumbnail function to viewer.

## Usage
```js
import dvsThumbnail from 'xxx';
import DVS from 'xxx';

// use plugin
DVS.use(dvsThumbnail);

// initialize DVS
const dvs = new DVS({
    // ... config
})
```
**See also:** [Using a Plugin](./README.md#using-a-plugin)

## Viewer API
### createThumbnail()
- **Description:** Create a thumbnail instance according to the configuration.
- **Arguments:** 
  - `{ thumbnailConfigObject } [config]` - the configuration of thumbnail.
- **Returns:** `{ Thumbnail }` - an instance of `Thumbnail` class.
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
const thumbnail = viewer.createThumbnail({/**config**/});
```

### removeThumbnail()
- **Description:** Remove a thumbnail instance from a viewer instance.
- **Arguments:** 
  - `{ Thumbnail | string } thumbnail | uid` - the instance of thumbnail or the uid.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
viewer.removeThumbnail();
```

### getThumbnailContents()
- **Description:** Get the array of thumbnail item.
- **Returns:** `{ Array<ThumbnailItem> }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
viewer.getThumbnailContents();
```

### getPageByIndex()
- **Description:** Get thumbnail item by index.
- **Arguments:** 
  - `{ number } index` - the index of thumbnail item.
- **Returns:** `{ ThumbnailItem }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
const thumbnailItem = viewer.getPageByIndex(1);
```
### getPageByUid()
- **Description:** Get thumbnail item by uid.
- **Arguments:** 
  - `{ string } uid` - the uid of thumbnail item.
- **Returns:** `{ ThumbnailItem }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
const uid = viewer.getUidByIndex(1);
const thumbnailItem = viewer.getPageByUid(uid);
```

## Thumbnail API
### setViewMode()
- **Description:** Set the number of columns and rows when show thumbnail on the webpage.
- **Arguments:** 
  - `{ number } column` - the number of thumbnail item columns.
  - `{ number } row` - the number of thumbnail item rows.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
const thumbnail  = viewer.createThumbnail({/**config**/})
thumbnail.setViewMode(2, 3); 
```

### on()
- **Description:** Listen a event and bind a callback.
- **Arguments:** 
  - `{ string } eventName` - event name.
  - `{ (...pram:Array<any>)=>any } callback` - callback of the event.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
const thumbnail  = viewer.createThumbnail({/**config**/});
thumbnail.on(eventName, ()=>{/**config**/}); 
```

### emit()
- **Description:** Emit an event, allow one or more parameters to be passed.
- **Arguments:** 
  - `{ string } eventName` - event name.
  - `{ ...Array<any> } [param]` - the passed parameters.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
const thumbnail  = viewer.createThumbnail({/**config**/});
thumbnail.on(eventName, ...param); 
```

### off()
- **Description:** Unbind an event callback. 
  - if a callback function is passed, only that callback function is unbound.
  - otherwise, all callbacks under that event are unbound.
- **Arguments:** 
  - `{ string } eventName` - event name.
  - `{ (...pram:Array<any>)=>any } [callback]` - callback of the event, it is optional.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
const thumbnail  = viewer.createThumbnail({/**config**/})
// 1. pass the callback
thumbnail.off(eventName, callback); 

// 2. don't pass the callback
thumbnail.off(eventName);
```
