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

## DataControl
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
- **Description:** Update the data.
- **Async:** `true`
- **Arguments:** 
  - `{ string } uid` - the id of target data.
  - `{ any } newData` - the new data.
- **Returns:** `{ Promise }`
- **Usage:**
```js
dvs.DataControl.updateData("id-string",{someData: true})
.then(res=>{
    console.log(res);
});
```

## ViewerControl
### createViewer()
- **Description:** Create a viewer according to configuration.If the second argument is passed, the viewer will async to the viewer specified by the second argument.
- **Arguments:** 
  - `{ object } config` - the configuration of the viewer to be created.
  - `{ string } [syncViewerUid]` - the uid of the viewer to be synced, which is optional.
- **Returns:** `{ Viewer }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.createViewer({/** config **/}, "syncViewerUidString");
```

### getViewerByUid()
- **Description:** Get viewer by uid.If omit uid, it will get the default viewer.
- **Arguments:** 
  - `{ string } [uid]` - the uid of the viewer.
- **Returns:** `{ Viewer }`
- **Usage:**
```js
// 1. omit the argument
const viewer0 = dvs.ViewerControl.getViewerByUid();

// 2. don't omit the argument
const viewer1 = dvs.ViewerControl.getViewerByUid("viewerUidString");
```

### getViewerByIndex()
- **Description:** Get viewer by index.
- **Arguments:** 
  - `{ number } index` - the index of the viewer.
- **Returns:** `{ Viewer }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(1);
```

### removeViewer()
- **Description:** Remove viewer from DVS. This api accept viewer uid or viewer instance as argument.
- **Arguments:** 
  - `{ string | Viewer } viewerUid | viewer ` - viewer uid or viewer instance.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(1);

// 1. pass viewer uid as the argument
dvs.ViewerControl.removeViewer(viewer.uid);

// 2. pass viewer as the argument
dvs.ViewerControl.removeViewer(viewer);
```

### getViewerList()
- **Description:** Get the list of all viewers in viewer manager.
- **Returns:** `{ Array<Viewer> }`
- **Usage:**
```js
const viewerList = dvs.ViewerControl.getViewerList();
```
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
- **Description:** Set the current index
- **Arguments:** 
  - `{ number } index` - the number of the index to be set as the current index.
- **Returns:** `{ boolean }`
- **Usage:**
```js
viewer.setCurrentIndex(1);
```

### getSelectedIndexes()
- **Description:** Get the selected page indexes, it is an array.
- **Returns:** `{ Array<number> }` - an array of the selected page index
- **Usage:**
```js
const currentIndex = viewer.getSelectedIndexes();
```
### setSelectedIndexes()
- **Description:** Set the current index
- **Arguments:** 
  - `{ Array<number> } indexes` - the array of the selected page index.
- **Returns:** `{ boolean }`
- **Usage:**
```js
viewer.setSelectedIndexes([0, 1, 5]);
```

### selectAll()
- **Description:** Select all the pages in current viewer.
- **Returns:** `{ boolean }`
- **Usage:**
```js
viewer.selectAll();
```

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



