# DVS API

## Global API
### DVS.use()
- **Description:** Install a DVS plugin.
  - The plugin must expose an `install` or `instancing` methods.
  - The `install` method will be called width DVS as the first argument.
  - The `instancing` method will be called width DVS instance as the first argument.
  - When this method is called on the same plugin multiple times, the plugin will be install only once.
- **Arguments:** 
  - `{ Plugin } plugin` - a DVS plugin.
- **Returns:** `{ boolean }`
- **See also:** [Using a Plugin](../plugins/README.md#using-a-plugin)
- **Usage:**
```js
DVS.use(dvs-plugin-xx1);
DVS.use(dvs-plugin-xx2，{
    //... config
});

const dvs = new DVS({
    //... config
})
```
You can chain invoke `DVS.use()`.
```js
DVS.use(dvs-plugin-xx1)
   .use(dvs-plugin-xx2,{
       //... config
    })
    .use(dvs-plugin-xx3);

const dvs = new DVS({
    //... config
});
```
### DVS.useAll()
- **Description:** This api has the same function width [DVS.use()](#dvs-use), but this api can use multiple plugins.
- **Arguments:** 
  - `{ Array<Plugin | [Plugin, config]> } pluginArray`
- **Returns:** `{ boolean }`
- **See also:** [Using a Plugin](../plugins/README.md#using-a-plugin)
- **Usage:**
```js
DVS.useAll([
    dvs-plugin-xx1,
    [dvs-plugin-xx2, { someOption: true }],
    dvs-plugin-xx3
]);

const dvs = new DVS({
    //... config
});
```
### DVS.getClasses()
- **Description:** Get the class store, it contains all the classes exposed.
- **Returns:** `{ Object }`
- **Usage:**
```js
const classes = DVS.getClasses();
const Viewer = classes.Viewer;
const PageLayout = classes.PageLayout;
```

### DVS.getPlugins()
- **Description:** Get all plugins used by [DVS.use()](#dvs-use) and [DVS.useAll()](#dvs-useAll).
- **Returns:** `{ Array<{plugin: Plugin, config: object}> }`
- **Usage:**
```js
const plugins = DVS.getPlugins();
```

## 2 DataControl
### appendSync()
- **Description:** This api is the data entry of DVS.It will append images to file named by the first argument.If the file dose not exist, it will create a new file width the first argument.
- **Arguments:** 
  - `{ string } fileName` - target filename
  - `{ Array<AppendData> } data array` - the target data to be appended. 
  - `AppendData:`
    - `oriData: Blob | base64 | url`
    - `minData: Blob | base64 | url`
    - `metaData: {width: number, height: number}`
    - `customData?: any`
    - `tags?: Array<string>`
- **Returns:** `{ Array<string> }` An array of uid.
- **Usage:**
```js
dvs.DataControl.appendSync("testFile", [
    {
        oriData: url,
        minData: null,
        metadata: { width: 500, height: 500 },
        customData: { words: "test custom data: dvs ." },
        tags: [],
    },
    {
        oriData: url,
        minData: null,
        metadata: { width: 500, height: 500 },
        customData: { words: "test custom data: dvs ." },
        tags: [],
    },
]);
```
### insertSync()
- **Description:** This api is the data entry of DVS.It will insert images to a specified position of a file named by the first argument.If the file dose not exist, it will create a new file width the first argument. If the third argument dose not pass, it is the same width [appendSync()](#appendsync).
- **Arguments:** 
  - `{ string } fileName` - target filename
  - `{ Array<AppendData> } data array` - the target data to be appended. 
    - `AppendData:`
      - `oriData: Blob | base64 | url`
      - `minData: Blob | base64 | url`
      - `metaData: {width: number, height: number}`
      - `customData?: any`
      - `tags?: Array<string>`
  - `{ number } index` - the index of target position.
- **Returns:** `{ Array<string> }` An array of uid.
- **Usage:**
```js
dvs.DataControl.insertSync("testFile", [
    {
        oriData: url,
        minData: null,
        metadata: { width: 500, height: 500 },
        customData: { words: "test custom data: dvs ." },
        tags: [],
    },
    {
        oriData: url,
        minData: null,
        metadata: { width: 500, height: 500 },
        customData: { words: "test custom data: dvs ." },
        tags: [],
    },
], 3);
```
### updateSync()
- **Description:** Update a page specified by uid.
- **Arguments:** 
  - `{ string } uid` - the uid of page to be updates
  - `{AppendData} data` - new data
    - `oriData: Blob | base64 | url`
    - `minData: Blob | base64 | url`
    - `metaData: {width: number, height: number}`
    - `customData?: any`
    - `tags?: Array<string>`
- **Returns:** `{ boolean }`
- **Usage:**
```js
dvs.DataControl.insertSync(uid, {
    oriData: url,
    minData: null,
    metadata: { width: 500, height: 500 },
    customData: { words: "test custom data: dvs ." },
    tags: [],
});
```

### addData()
- **Description:** Add some data to DVS storage.
- **Async:** `true`
- **Arguments:** 
  - `{ string } uid` - the id of target data.
  - `{ any } data` - the data to be saved.
- **Returns:** `{ Promise }`
- **Usage:**
```js
dvs.DataControl.addData("ids-string", {someData: true})
.then(res=>{
    console.log(res);
});
```
### getData()
- **Description:** Get data from DVS storage.
- **Async:** `true`
- **Arguments:** 
  - `{ string } uid` - the id of target data.
- **Returns:** `{ Promise }` 
- **Usage:**
```js
dvs.DataControl.getData("id-string")
.then(res=>{
    console.log(res);
});
```

### removeData()
- **Description:** Remove data from DVS storage.
- **Async:** `true`
- **Arguments:** 
  - `{ string } uid` - the id of target data.
- **Returns:** `{ Promise }`
- **Usage:**
```js
dvs.DataControl.removeData("id-string")
.then(res=>{
    console.log(res);
});
```
### updateData()
- **Description:** Remove data from DVS storage.
- **Async:** `true`
- **Arguments:** 
  - `{ string } uid` - the id of target data.
  - `{ any } newData` - the new data.
- **Returns:** `{ Promise }`
- **Usage:**
```js
dvs.DataControl.getData("id-string")
.then(res=>{
    console.log(res);
});
```

## ViewerControl
### createViewer()
### getViewerByUid()
### getViewerByIndex()
### removeViewer()
### getViewerList()
### dispose()


## Viewer Methods
### getCurrentIndex()
- **Description:** Get current index by index.
- **Returns:** `{ number }`
- **Usage:**
```js
const currentIndex = viewer.getCurrentIndex();
```

### setCurrentIndex()
- **Description:** Remove a thumbnail instance from a viewer instance.
- **Arguments:** 
  - `{ Thumbnail | string } thumbnail | uid` - the instance of thumbnail or the uid.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
viewer.removeThumbnail();
```
### getSelectedIndexes()
### setCurrentIndexes()
### selectAll()
### removeAsync()
### removeAllSync()
### switchPage()
### movePage()
### setViewMode()
### nextPage()
### prevPage()
### firstPage()
### lastPage()
### gotoPage()
### getIndexByUid()
### getUidByIndex()
### getRealTimeMetadataByIndex()
### getMetadataByIndex()
### setMetadataByIndex()
### getCustomDataByIndex()
### getCustomDataByUid()
### render()
### on()
### emit()
### off()
### setCache()
## Viewer Properties
### tabMode
### currentPageCount
### showLatestPage
### postfix




