# Edit
This plugin extends the Viewer class, add  `rotate`, `flip`, `mirror`, `crop` and `changePageSize` methods to the viewer.
## Usage
```js
import dvsEdit from 'xxx';
import DVS from 'xxx';

// use plugin
DVS.use(dvsEdit);

// initialize DVS
const dvs = new DVS({
    // ... config
})
```
**See also:** [Using a Plugin](./README.md#using-a-plugin)

## Viewer API
This plugin will add some method to the instance of Viewer class.
### rotate()
- **Description:** Rotate the pages according to the index.
- **Arguments:** 
  - `{ number } angle` - the rotation angle.
  - `{ number | Array<number> } [index] | [indexes]` - the indexes of the rotated pages.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
// 1. Omit the second argument, the current page will be rotated.
viewer.rotate(90);

// 2. Pass a number as the second argument.
viewer.rotate(90, 2);

// 3. Pass an array of index as the second argument.
viewer.rotate(90, [ 0, 2, 5 ]);
```

### flip()
- **Description:** Flip the pages according to the index.
- **Arguments:** 
  - `{ number | Array<number> } [index] | [indexes]` - the indexes of the rotated pages.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
// 1. Omit the argument, the current page will be flipped.
viewer.flip();

// 2. Pass a number as the argument.
viewer.flip(2);

// 3. Pass an array of index as the argument.
viewer.flip([ 0, 2, 5 ]);
```

### mirror()
- **Description:** Mirror the pages according to the index.
- **Arguments:** 
  - `{ number | Array<number> } [index] | [indexes]` - the indexes of the rotated pages.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
// 1. Omit the argument, the current page will be flipped.
viewer.mirror();

// 2. Pass a number as the argument.
viewer.mirror(2);

// 3. Pass an array of index as the argument.
viewer.mirror([ 0, 2, 5 ]);
```

### crop()
- **Description:** Crop the page.
- **Arguments:** 
  - `{ number } left` - the distance between the left side of crop box and the left side of the page.
  - `{ number } top` - the distance between the top side of crop box and the top side of the page.
  - `{ number } width` - the width of the crop box.
  - `{ number } height` - the height of the crop box.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);

viewer.crop(50, 50, 100, 100);
```

### changePageSize()
- **Description:** Crop the page.
- **Arguments:** 
  - `{ number } width` - the new width of the current page.
  - `{ number } height` - the new height of the current page.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);

viewer.changePageSize(500, 500);
```