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
- **Description:** Save some data to DVS storage.
- **Async:** `true`
- **Arguments:** 
  - `{ string } uid` - the id of target data.
  - `{ any } data` - the data to be saved.
- **Returns:** `{ Promise<any> }`
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
- **Returns:** `{ Promise<any> }` 
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
- **Returns:** `{ Promise<any> }`
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
- **Returns:** `{ Promise<any> }`
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
  - `{ number } index` - the index of the viewer, it is 0-based.
- **Returns:** `{ Viewer }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(1);
```

### removeViewer()
- **Description:** Remove a viewer from DVS. This api accept viewer uid or viewer instance as argument.
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
- **Description:** Get the index of the current page.
- **Returns:** `{ number }`
- **Usage:**
```js
const currentIndex = viewer.getCurrentIndex();
```

### setCurrentIndex()
- **Description:** Set the current index.
- **Arguments:** 
  - `{ number } index` - the number of the index to be set as the current index, the index 0-based.
- **Returns:** `{ boolean }`
- **Usage:**
```js
viewer.setCurrentIndex(1);
```

### getSelectedIndexes()
- **Description:** Get the selected page indexes, it is an array.
- **Returns:** `{ Array<number> }` - an array of the selected page index, the index is 0-based.
- **Usage:**
```js
const currentIndex = viewer.getSelectedIndexes();
```
### setSelectedIndexes()
- **Description:** Set the selected indexes.
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

### removeSync()
- **Description:** Remove some pages of the current file from DVS storage, this api accept a number of index or an Array of index.
- **Arguments:** 
  - `{ number | Array<number> } index | indexes` - a number of index or an array of index.
- **Returns:** `{ boolean }`
- **Usage:**
```js
// 1. pass a number of index
viewer.removeSync(2);

// 2. pass an array of index
viewer.removeSync([0, 1, 4]);
```
### removeAllSync()
- **Description:** Remove all the pages of current file from DVS storage, this api accept a number of index or an Array of index.
- **Returns:** `{ boolean }`
- **Usage:**
```js
viewer.removeAllSync();
```
### switchPage()
- **Description:** Switch the positions of two pages specified by the index.
- **Arguments:** 
  - `{ number } index1` - a number of one page index.
  - `{ number } index2` - a number of the another page index.
- **Returns:** `{ boolean }`
- **Usage:**
```js
// switch the positions on page 0 and page 6
viewer.switchPage(0, 6);
```

### movePage()
- **Description:** Move a page from one position to another position.
- **Arguments:** 
  - `{ number } index` - the target index of the page.
  - `{ number } newIndex` - the new index to be moved to.
- **Returns:** `{ boolean }`
- **Usage:**
```js
// move page 0 to the position of page 6
viewer.movePage(0, 6);
```

### nextPage()
- **Description:** Set the next page as the current page. The index of next page is `currentIndex + 1`. If the current page is the last page, the next page will keep the current index. If the total number of pages is `0`, this api will return `-1`;
- **Returns:** `{ number }`
- **Usage:**
```js
viewer.nextPage();
```

### prevPage()
- **Description:** Set the previous page as the current page. The index of next page is `currentIndex - 1`. If the current page is the first page, the previous page will keep the current index. If the total number of pages is `0`, this api will return `-1`;
- **Returns:** `{ number }`
- **Usage:**
```js
viewer.prevPage();
```

### firstPage()
- **Description:** Set the first page as the current page. If the total number of pages is `0`, this api will return `-1`;
- **Returns:** `{ number }`
- **Usage:**
```js
viewer.firstPage();
```

### lastPage()
- **Description:** Set the last page as the current page. If the total number of pages is `0`, this api will return `-1`;
- **Returns:** `{ number }`
- **Usage:**
```js
viewer.firstPage();
```

### gotoPage()
- **Description:** Set the page specified by index as the current page. If the total number of pages is `0`, this api will return `-1`;
- **Arguments:** 
  - `{ number } index` - the target index of the page.
- **Returns:** `{ number }`
- **Usage:**
```js
viewer.gotoPage(6);
```

### getIndexByUid()
- **Description:** Get the page index by the uid of the page.
- **Arguments:** 
  - `{ string } uid` - the uid of the page.
- **Returns:** `{ number }`
- **Usage:**
```js
const index = viewer.getIndexByUid("pageUidString");
console.log(index); // 0
```
### getUidByIndex()
- **Description:** Get the page uid by the index of the page.
- **Arguments:** 
  - `{ number } index` - the index of the page.
- **Returns:** `{ string }`
- **Usage:**
```js
const uid = viewer.getUidByIndex(0);
console.log(uid); // "pageUidString"
```

### getRealTimeMetadataByIndex()
- **Description:** Get the real time metadata of the page specified by the index.
- **Arguments:** 
  - `{ number } index` - the index of the page.
- **Returns:** `{ metadata }`
  - `metadata:`
    - `width: number`
    - `height: number`
- **Usage:**
```js
const metadata = viewer.getRealTimeMetadataByIndex(0);
console.log(metadata); // {width: 500, height: 500}
```

### getMetadataByIndex()
- **Description:** Get the metadata of the page specified by the index.
- **Arguments:** 
  - `{ number } index` - the index of the page.
- **Returns:** `{ metadata }`
  - `metadata:`
    - `width: number`
    - `height: number`
- **Usage:**
```js
const metadata = viewer.getMetadataByIndex(0);
console.log(metadata); // {width: 500, height: 500}
```

### setMetadataByIndex()
- **Description:** Set the metadata of the page specified by the index.
- **Arguments:** 
  - `{ number } index` - the index of the page.
  - `{ metadata } metadata` - the new metadata of the page.
    - `metadata:`
      - `width: number`
      - `height: number`
- **Returns:** `{ metadata }`
- **Usage:**
```js
viewer.setMetadataByIndex(0, {width: 300, height: 300});
const metadata = viewer.getMetadataByIndex(0);
console.log(metadata); // {width: 300, height: 300}
```

### getCustomDataByIndex()
- **Description:** get the customData of the page specified by the index.
- **Arguments:** 
  - `{ number } index` - the index of the page.
- **Returns:** `{ any }`
- **Usage:**
```js
const customData = viewer.getCustomDataByIndex(0);
console.log(customData); // any
```
### getCustomDataByUid()
- **Description:** Get the customData of the page specified by the uid.
- **Arguments:** 
  - `{ string } index` - the uid of the page.
- **Returns:** `{ any }`
- **Usage:**
```js
const customData = viewer.getCustomDataByUid("pageUidString");
console.log(customData); // any
```

### render()
- **Description:** Re-render all the elements of the viewer on the webpage.
- **Returns:** `{ boolean }`
- **Usage:**
```js
viewer.render();
```

### on()
- **Description:** Listen a event and bind a callback.
- **Arguments:** 
  - `{ string } eventName` - event name.
  - `{ (...pram:Array<any>)=>any } callback` - callback of the event, it is optional.
- **Returns:** `{ boolean }`
- **Usage:**
```js
viewer.on(eventName, ()=>{//...}); 
```

### emit()
- **Description:** Emit an event, allow one or more parameters to be passed.
- **Arguments:** 
  - `{ string } eventName` - event name.
  - `{ ...Array<any> } [param]` - the passed parameters.
- **Returns:** `{ boolean }`
- **Usage:**
```js
viewer.on(eventName, ...param); 
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
// 1. pass the callback
viewer.off(eventName, callback); 

// 2. don't pass the callback
viewer.off(eventName);
```
### setCache()
- **Description:** This api will cache the events when invoking `setCache(true)`, all the cached events will be triggered after invoking `setCache(false)`.
- **Arguments:** 
  - `{ boolean } flag` - the flag whether to cache the events.
- **Returns:** `{ boolean }`
- **Usage:**
```js
viewer.setCache(true);
viewer.emit(eventName, param);
viewer.setCache(false);
```

### setViewMode()
- **Description:** Set the number of columns and rows when show pages on the main view.
- **Arguments:** 
  - `{ number } column` - the number of columns.
  - `{ number } row` - the number of rows.
- **Returns:** `{ boolean }`
- **Usage:**
```js
viewer.setViewMode(2, 3); 
```

## Viewer Properties
### tabMode
### currentPageCount
### showLatestPage
### postfix



