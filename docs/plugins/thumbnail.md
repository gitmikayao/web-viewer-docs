# Thumbnail

## Viewer API
### createThumbnail()
- **Description:** Create a thumbnail instance according to the configuration.
- **Argument:** 
  - `{ thumbnailConfigObject } [config]` - the configuration of thumbnail.
- **Returns:** `{ Thumbnail }` - an instance of `Thumbnail` class.
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
const thumbnail = viewer.createThumbnail({//...});
```

### removeThumbnail()
- **Description:** Remove a thumbnail instance from a viewer instance.
- **Argument:** 
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
- **Argument:** 
  - `{ number } index` - the index of thumbnail item.
- **Returns:** `{ ThumbnailItem }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
const thumbnailItem = viewer.getPageByIndex(1);
```
### getPageByUid()
- **Description:** Get thumbnail item by uid.
- **Argument:** 
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
- **Argument:** 
  - `{ number } column` - the number of thumbnail item columns.
  - `{ number } row` - the number of thumbnail item rows.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
const thumbnail  = viewer.createThumbnail({//...})
thumbnail.setViewMode(2, 3); 
```

### on()
- **Description:** Listen a event and bind a callback.
- **Argument:** 
  - `{ string } eventName` - event name.
  - `{ (...pram:Array<any>)=>any } callback` - callback of the event.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
const thumbnail  = viewer.createThumbnail({//...})
thumbnail.on(eventName, ()=>{//...}); 
```

### emit()
- **Description:** Emit an event, allow one or more parameters to be passed.
- **Argument:** 
  - `{ string } eventName` - event name.
  - `{ ...Array<any> } [param]` - the passed parameters.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
const thumbnail  = viewer.createThumbnail({//...})
thumbnail.on(eventName, ...param); 
```

### off()
- **Description:** Unbind an event callback. 
  - if a callback function is passed, only that callback function is unbound.
  - otherwise, all callbacks under that event are unbound.
- **Argument:** 
  - `{ string } eventName` - event name.
  - `{ (...pram:Array<any>)=>any } [callback]` - callback of the event.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
const thumbnail  = viewer.createThumbnail({//...})
// 1. pass the callback
thumbnail.off(eventName, callback); 

// 2. don't pass the callback
thumbnail.off(eventName);
```