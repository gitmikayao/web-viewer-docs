# UI
This plugin extends the Viewer class, add some properties and methods to Viewer to control view.
## Usage
```js
import dvsUiPlugin from 'dvs-ui-plugin';
import DVS from 'dvs';

// use plugin
DVS.use(dvsUiPlugin,{
    // ... ui config
})

// initialize DVS
const dvs = new DVS();
```
## Viewer API

### width
- **Description:** set _viewer width.
- **Type:** `{ number,string }`


### height
- **Description:** set _viewer height.
- **Type:** `{ number,string }`


### uiConfig
- **Description:** get _viewer uiConfig.
- **Type:** `{ unknown }`
- **Readonly:** `true`


### outerBorder
- **Description:** set border of viewer.
- **Type:** `{ string }`


### showVideoContainer
- **Description:** 
- **Type:** `{ boolean }`


### footerColor
- **Description:** set value of property 'footerColor'.
- **Type:** `{ string }`


### showAside
- **Description:** set value of property 'showAside'.
- **Type:** `{ boolean }`


### showMain
- **Description:** set value of property 'showMain'.
- **Type:** `{ boolean }`


### showFooter
- **Description:** set value of property 'showFooter'.
- **Type:** `{ boolean }`


### showViewer
- **Description:** TODO:暂未实现
- **Type:** `{ boolean }`


### showHeader
- **Description:** set value of property 'showHeader'.
- **Type:** `{ boolean }`


### headerColor
- **Description:** set value of property 'headerColor'.
- **Type:** `{ string }`


### showTopMenu
- **Description:** set value of property 'showTopMenu'.
- **Type:** `{ boolean }`


### topMenuColor
- **Description:** set value of property 'topMenuColor'.
- **Type:** `{ string }`


### topMenuBorder
- **Description:** 
- **Type:** `{ string }`


### bindView()
- **Description:** create view with ui config
- **Arguments:** 
  - `{ string,HTMLElement } container` - contain element
  - `{ Partial<IUiConfig> } option` - 
- **Returns:** `{ boolean }`
- **Usage:**
```js
// 1. bind ui by container id
viewer.bindView("containerId");

//2. bind ui by element
viewer.bindView(element);
```


### unbindView()
- **Description:** unbind view and remove ui events
- **Arguments:** 
- **Returns:** `{ AllLiteral }`
- **Usage:**
```js
viewer.unbindView();
```


### updateUISetting()
- **Description:** unbind old view and create new view with option
the option will merge with default option
- **Arguments:** 
  - `{ Partial<IUiConfig> } option` - 
- **Returns:** `{ boolean }`
- **Usage:**
```js
//1. update with empty config
viewer.updateUISetting();

//2. update with option config
viewer.updateUISetting({
    headerColor:"#fff"
});
```


### bindContent()
- **Description:** move main view and header element to other element
- **Arguments:** 
  - `{ HTMLElement } container` - other container element
- **Returns:** `{ boolean }`
- **Usage:**
```js
// 1. bind content element by container id
viewer.bindContent("containerId");

//2. bind content element by element
viewer.bindContent(element);
```


### unbindContent()
- **Description:** move main view and header element back from web view
- **Arguments:** 
- **Returns:** `{ boolean }`
- **Usage:**
```js
viewer.unbindContent();
```


### fullScreen()
- **Description:** make the view full screen
- **Arguments:** 
- **Returns:** `{ boolean }`
- **Usage:**
```js
viewer.fullScreen();
```


### cancelFullScreen()
- **Description:** make the view exit full screen
- **Arguments:** 
- **Returns:** `{ boolean }`
- **Usage:**
```js
viewer.cancelFullScreen();
```


### fullWebPage()
- **Description:** make the view full web page
- **Arguments:** 
- **Returns:** `{ boolean }`
- **Usage:**
```js
viewer.fullWebPage();
```


### cancelFullWebPage()
- **Description:** make the view exit full web page
- **Arguments:** 
- **Returns:** `{ boolean }`
- **Usage:**
```js
viewer.cancelFullWebPage();
```


### setButtonClass()
- **Description:** change the className of the button width the button name you set
- **Arguments:** 
  - `{ string } buttonName` - button name set in config
  - `{ string } className` - class name needed to be set
- **Returns:** `{ boolean }`
- **Usage:**
```js
viewer.setButtonClass(<button name in config>,"myClassName");
```


### addComponent()
- **Description:** add custom component
- **Arguments:** 
  - `{ ComponentOption,{container:string,HTMLElement;} } option` - 
  - `{ Cp } Component` - 
- **Returns:** `{  }`
- **Usage:**
```js
viewer.addComponent({
    component:MyComponent,
    template:"<div className="testDiv">this is a test element</div>",
    container:"containerId",
    data:{
        name:"dvs",
        number:1
    },
    inject:{
        injectNumber:2
    }
})
```


