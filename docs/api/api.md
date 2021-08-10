# DVS API
## 1 Global API
### DVS.use()
### DVS.useAll()
### DVS.getClasses()
### DVS.getPlugins()

## 2 Namespace
### 2.1 DVS.DataControl
#### appendSync()
#### insertSync()
#### updateSync()
#### addData()
#### getData()
#### removeData()
#### updateData()

### 2.2 DVS.ViewerControl
#### createViewer()
#### getViewerByUid()
#### getViewerByIndex()
#### removeViewer()
#### getViewerList()
#### dispose()


## 3 Core
### 3.1 Viewer methods
#### getCurrentIndex()
#### setCurrentIndex()
#### getSelectedIndexes()
#### setCurrentIndexes()
#### selectAll()
#### removeAsync()
#### removeAllSync()
#### switchPage()
#### movePage()
#### setViewMode()
#### nextPage()
#### prevPage()
#### firstPage()
#### lastPage()
#### gotoPage()
#### getIndexByUid()
#### getUidByIndex()
#### getRealTimeMetadataByIndex()
#### getMetadataByIndex()
#### setMetadataByIndex()
#### getCustomDataByIndex()
#### getCustomDataByUid()
#### render()
#### on()
#### emit()
#### off()
#### setCache()

### 3.2 Viewer properties
#### tabMode
#### currentPageCount
#### showLatestPage
#### postfix
### 3.3 thumbnail
#### setViewMode()
#### background

## 4 Plugins
### 4.1 dvsPluginAnnotation
#### add()
#### remove()
#### update()
#### getAnnotation()
#### getPageAnnotation()
#### select()
#### rectangle()
#### path()
#### line()
#### arc()
#### ellipse()
#### text()
#### image()

### 4.2 dvsPluginCropBox
### 4.3 dvsPluginDirectory

### 4.4 dvsPluginEdit
#### viewer.rotate()
#### viewer.flip()
#### viewer.mirror()
#### viewer.crop()
#### viewer.changPageSize()

### 4.5 dvsPluginError
#### dvsInstance.Error.errorMessage
#### dvsInstance.Error.errorCode

### 4.6 dvsPluginLog
#### dvsInstance.Log.clear()
#### dvsInstance.Log.allowLog

### 4.7 dvsPluginSlide
### 4.8 dvsPluginTag
### 4.9 dvsPluginThumbnail
#### createThumbnail()
#### removeThumbnail()
#### getThumbnailContents()
#### getPageByIndex()
#### getPageByUid()

### 4.10 dvsPluginUi
#### viewer.fullScreen


