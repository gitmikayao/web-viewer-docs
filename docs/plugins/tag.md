# Tag
This plugin will add a namespace `Tag` to the instance of DVS. The `Tag` object will provide some apis to manage the tags.
## Usage
```js
import dvsTag from 'xxx';
import DVS from 'xxx';

// use plugin
DVS.use(dvsTag);

// initialize DVS
const dvs = new DVS({
    // ... config
})
```
**See also:** [Using a Plugin](./README.md#using-a-plugin)

## API
### addTag()
- **Description:** Add a tag to the tag manager.
- **Arguments:** 
  - `{ string } tagName` - a string of tag name.
- **Returns:** `{ boolean }`
- **Usage:**
```js
dvs.Tag.addTag(tagName);
```
### removeTag()
- **Description:** Remove a tag from the tag manager.
- **Arguments:** 
  - `{ string } tagName` - a string of tag name.
- **Returns:** `{ boolean }`
- **Usage:**
```js
dvs.Tag.removeTag(tagName);
```
### emptyTag()
- **Description:** Empty contents of a tag.
- **Arguments:** 
  - `{ string } tagName` - a string of tag name.
- **Returns:** `{ boolean }`
- **Usage:**
```js
dvs.Tag.emptyTag(tagName);
```
### openTag()
- **Description:** Open a tag and show the contents on viewer which can be specified by the second argument.
- **Arguments:** 
  - `{ string } tagName` - a string of tag name.
  - `{ string } [viewerUid]` - a string of viewer uid.
- **Returns:** `{ boolean }`
- **Usage:**
```js
const viewer = dvs.ViewerControl.getViewerByIndex(0);
const viewerUid = viewer.uid;
dvs.Tag.openTag(tagName,viewerUid);
```

### getCurrentTag()
- **Description:** Get the current tag object which is opened on viewer.
- **Returns:** `{ TagItem }`
- **Usage:**
```js
const currentTagItem = dvs.Tag.getCurrentTag();
```

### getDefaultTag()
- **Description:** Get the name of default tag.
- **Returns:** `{ string }`
- **Usage:**
```js
dvs.Tag.getDefaultTag();
```

### setDefaultTag()
- **Description:** Set the default tag name.
- **Arguments:** 
  - `{ string } tagName` - a string of tag name.
- **Returns:** `{ boolean }`
- **Usage:**
```js
dvs.Tag.setDefaultTag(tagName);
```

### addPageTag()
- **Description:** add a tag to the page specified by page uid.
- **Arguments:** 
  - `{ string } pageUid` - a string of page uid.
  - `{ string } tagName` - a string of tag name.
- **Returns:** `{ boolean }`
- **Usage:**
```js
dvs.Tag.addPageTag(pageUid, tagName);
```

### removePageTag()
- **Description:** Remove tag from a page.
  - if pass the tag name only the specified tag is removed.
  - otherwise, all tag on the page are removed.
- **Arguments:** 
  - `{ string } pageUid` - a string of page uid.
  - `{ string } [tagName]` - a string of tag name.
- **Returns:** `{ boolean }`
- **Usage:**
```js
// 1. pass the tag name
dvs.Tag.removePageTag(pageUid, tagName);

// 2. don't pass the tag name
dvs.Tag.removePageTag(pageUid);
```

### renameTag()
- **Description:** Rename a tag.
- **Arguments:** 
  - `{ string } oldTagName` - the old tag name.
  - `{ string } newTagName` - the new tag name.
- **Returns:** `{ boolean }`
- **Usage:**
```js
dvs.Tag.renameTag(pageUid, tagName);
```

### getTagList()
- **Description:** Get an array of all tag items.
- **Returns:** `{ Array<tagItem> }`
- **Usage:**
```js
dvs.Tag.getTagList();
```

